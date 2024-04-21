import React from 'react'

const card = () => {
    return (
        <div class="board-card relative" ondrop="drop(event)" ondragover="allowDrop(event)">
            <div class="card bg-gray-200 p-4 rounded-md" draggable="true" ondragstart="drag(event)" id="card1">
                <div class="card-top flex justify-between items-center">
                    <div class="card-top-labels">
                        <label class="bg-pink-500 text-white font-bold py-1 px-2 rounded-md">Urgent</label>
                    </div>
                    <div class="card-top-more">
                        <button class="delete-btn card_delete_btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Card</button>
                    </div>
                </div>
                <div class="card-title font-bold mt-4">Task1</div>
                <div class="card-details mt-2">
                    <p title="Task1 Detail Description"><span class="material-symbols-outlined">format_list_bulleted</span></p>
                </div>
                <div class="card-footer flex justify-between mt-4">
                    <p class="card-footer-item">2023-11-09</p>
                    <p class="card-footer-item">0</p>
                </div>
            </div>

        </div>

    )
}

export default card