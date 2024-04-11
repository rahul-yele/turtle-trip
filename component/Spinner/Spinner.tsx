import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-blue-900"></div>
        </div>
    );
};

export default Spinner;
