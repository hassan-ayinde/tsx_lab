import React from 'react';

const Appcontainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-11/12 md:w-sm py-6 px-3 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div>
    );
}

export default Appcontainer;