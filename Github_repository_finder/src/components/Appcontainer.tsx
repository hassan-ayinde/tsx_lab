import React from 'react';

const Appcontainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div>
    );
}

export default Appcontainer;