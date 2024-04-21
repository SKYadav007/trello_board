import React, { useState } from 'react'
import Card from "./card"


const Board = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const removeTaskBoard = () => {

    }

    return (
        <div class="px-4">
            <div class="board bg-gray-300 rounded-lg shadow-md">
                <div class="board-in p-4">
                    <div class="board-head flex justify-between items-center mb-4 flex-row">
                        <p class="board-card-title font-bold text-xl" contenteditable="true" >Backlog <span class="count"></span></p>
                        <div className="board-more-btn">
                            {isVisible ? (
                                <button className=" board_delete_btn text-black py-1 px-2 " onClick={removeTaskBoard}>
                                    Delete
                                </button>
                            ) : (
                                <button className="text-black py-2 px-4 " onClick={handleClick}>
                                    ...
                                </button>
                            )}
                        </div>

                    </div>

                    {/* <Card /> */}

                    <div class="w-full flex justify-center items-center cursor-pointer">
                        <div class=" w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Card</div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Board