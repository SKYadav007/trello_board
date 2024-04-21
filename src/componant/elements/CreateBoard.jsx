import React, { useState } from 'react'

const CreateBoard = () => {
    const [addlist, setAddList] = useState(false);

    return (
        <div className='flex flex-row justify-center items-center gap-5'>
            <div>
                {
                    addlist && (
                        <div className=' flex flex-col items-center  justify-center gap-2 m-2'>
                            <input placeholder='Enter list title...' className='py-2 px-2 w-full border-solid border-gray-400 '></input>
                            <div className='w-full flex gap-4'>
                                <button className='text-sm bg-blue-500 text-white p-1' onClick={() => (addlist ? setAddList(false) :"" )}>Add List</button>
                                <button className='p-1' onClick={() => (addlist ? setAddList(false) :"" )}>X</button>
                            </div>

                        </div>
                    )
                }
            </div>

            <div className="w-80 flex justify-center items-center cursor-pointer">
                <div className=" w-full text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => (addlist ? "" : setAddList(true))}>Add List </div>
            </div>
        </div>
    )
}

export default CreateBoard