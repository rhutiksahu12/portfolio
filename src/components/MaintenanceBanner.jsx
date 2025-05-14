import React, { useState } from 'react';

const MaintenanceBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-yellow-500 text-black text-center text-sm sticky top-0 z-40 flex items-center justify-between">
            <span className="flex-grow text-center"> {/* Added span to help center text when close button is present */}
                🚧 This website is currently under maintenance. Some features may not be fully functional. 🚧
            </span>
            <button
                onClick={() => setIsVisible(false)}
                className="text-black hover:text-gray-700 font-bold text-lg ml-2 px-2"
                aria-label="Close maintenance banner"
            >
                &times; {/* HTML entity for 'X' (multiplication sign) */}
            </button>
        </div>
    );
};

export default MaintenanceBanner;