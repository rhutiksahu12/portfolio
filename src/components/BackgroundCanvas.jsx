import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeJsBackground() {
    const mountRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const animationFrameIdRef = useRef(null); // For storing animation frame ID

    useEffect(() => {
        if (!mountRef.current || typeof window === 'undefined') return; // Ensure window is defined

        const currentMount = mountRef.current; // Capture current mount node

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a2b3c); // A slightly lighter dark blue

        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentMount.appendChild(renderer.domElement);

        // Create particles - use cubes instead of points for better visibility
        const particleCount = 50; // Reduced for easier debugging
        const particles = new THREE.Group();

        const colors = [
            new THREE.Color(0x3498db),  // Blue
            new THREE.Color(0x9b59b6),  // Purple
            new THREE.Color(0x2ecc71),  // Green
            new THREE.Color(0xe74c3c),  // Red
        ];

        for (let i = 0; i < particleCount; i++) {
            const size = 0.5; // Fixed larger size for debugging
            const geometry = new THREE.BoxGeometry(size, size, size);
            const color = colors[i % colors.length]; // Cycle through colors
            const material = new THREE.MeshBasicMaterial({
                color: color,
                // transparent: true, // Disable transparency for debugging
                // opacity: 0.7
            });

            const cube = new THREE.Mesh(geometry, material);

            const radius = 5; // Fixed smaller radius for debugging, closer to origin
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1); // More uniform spherical distribution

            cube.position.x = radius * Math.sin(phi) * Math.cos(theta);
            cube.position.y = radius * Math.sin(phi) * Math.sin(theta);
            cube.position.z = radius * Math.cos(phi);
            
            // console.log(`Cube ${i} position:`, cube.position.x, cube.position.y, cube.position.z);

            cube.userData.originalPosition = cube.position.clone();
            cube.userData.randomSpeed = Math.random() * 0.02 + 0.01;
            cube.userData.randomAmplitude = Math.random() * 0.5 + 0.5;

            particles.add(cube);
        }

        scene.add(particles);
        // console.log('Particles added to scene:', particles.children.length);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // Brighter ambient light
        scene.add(ambientLight);

        camera.position.z = 10; // Pull camera back a bit less, particles are closer
        // console.log('Camera position:', camera.position.z);

        const mouse = { x: 0, y: 0 };

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        document.addEventListener('mousemove', onMouseMove);

        const handleResize = () => {
            if (currentMount) { // Check if mount is still there
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set size

        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameIdRef.current = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();
            particles.rotation.y = elapsedTime * 0.1;

            particles.children.forEach((cube) => {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                const { originalPosition, randomSpeed, randomAmplitude } = cube.userData;
                const pulseFactor = Math.sin(elapsedTime * randomSpeed) * randomAmplitude;
                const direction = originalPosition.clone().normalize();
                cube.position.x = originalPosition.x + direction.x * pulseFactor;
                cube.position.y = originalPosition.y + direction.y * pulseFactor;
                cube.position.z = originalPosition.z + direction.z * pulseFactor;
            });

            camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();
        setIsLoaded(true);

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onMouseMove);

            particles.children.forEach(cube => {
                cube.geometry.dispose();
                if (cube.material.dispose) cube.material.dispose(); // Check if dispose exists
            });
            scene.remove(particles);
            if (particles.dispose) particles.dispose(); // If Group has a dispose method
            
            if (ambientLight.dispose) ambientLight.dispose();
            scene.remove(ambientLight);

            renderer.dispose();
            if (currentMount && renderer.domElement) {
                try {
                  currentMount.removeChild(renderer.domElement);
                } catch (e) {
                  console.warn("Could not remove renderer DOM element:", e);
                }
            }
            // console.log('Cleanup complete');
        };
    }, []); // Empty dependency array, runs once on mount

    return (
        <>
            <div
                ref={mountRef}
                className="fixed top-0 left-0 w-full h-full -z-10"
                style={{ background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)' }}
            />
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white px-4">
                <h1 className={`text-5xl mb-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    Your Name
                </h1>
                <p className={`text-xl mb-8 transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    Web Developer & Designer
                </p>
                <div className="flex flex-wrap justify-center">
                    <a
                        href="#projects"
                        className={`bg-white bg-opacity-20 text-white px-6 py-3 rounded border border-white mr-4 mb-4 transition-all duration-300 hover:bg-opacity-30 hover:-translate-y-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className={`bg-white bg-opacity-20 text-white px-6 py-3 rounded border border-white mr-4 mb-4 transition-all duration-300 hover:bg-opacity-30 hover:-translate-y-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </>
    );
}