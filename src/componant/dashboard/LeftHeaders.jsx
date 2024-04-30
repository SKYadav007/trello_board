import React from 'react';

const LeftHeaders = () => {
    return (
        <div className='flex  justify-center m-1 gap-5 shadow-md flex-wrap flex-col bg-blue-300 p-2'>
            <div className="flex items-center flex-col justify-center gap-5">
                <button className=" w-70 max-lg:w-70 md:w-60 shadow-md hover:bg-blue-400 text-black font-semibold  rounded text-center m-2">
                    Add New Board
                </button>
                <button className="w-70 max-lg:w-70 md:w-60 shadow-md hover:bg-blue-400 text-black font-semibold  rounded text-center">
                    Add Task Board
                </button>

            </div>
            <div className='flex justify-center'>
                <button className="w-70 max-lg:w-70 md:w-60 shadow-md hover:bg-red-400 text-black font-semibold py-2 px-4 md:px-8 lg:px-10 rounded text-center">
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default LeftHeaders;