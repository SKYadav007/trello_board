import React, { useState } from 'react';

const Card = (prop) => {
    const [isVisible, setIsVisible] = useState(false);


    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    const removeTaskBoard = () => {
        // try {
        //     axios.delete(`http://localhost:10000/api/v1/list/${prop.id}`,

        //         {
        //             // headers: {
        //             //     Authorization: user.auth.token
        //             // }
        //         }
        //     ).
        //         then((res) => {
        //             console.log(res.data);

        //             toast.success("List Deleted Sucessfully!", {
        //                 position: "top-right"
        //             });
        //         }).
        //         catch((err) => {
        //             toast.error("unable to delete list", {
        //                 position: "top-right"
        //             });

        //         });
        // } catch (error) {
        //     console.log(error);
        // }


    }
  return (
    <div className="board-card relative" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}>
      <div className="card bg-gray-200 p-4 rounded-md" draggable="true" onDragStart={(event) => drag(event)} id="card1">
        <div className="card-top flex justify-between items-center">
          <div className="card-top-labels">
            <label className="bg-pink-500 text-white font-bold py-1 px-2 rounded-md">{prop.status}</label>
          </div>
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
        <div className="text-start font-semibold mt-4">{prop.title}</div>
        <div className="card-details mt-2">
          <p title="Task_detail_escription" className='text-start '><span className="material-symbols-outlined font-thin ">{prop.description}</span></p>
        </div>
        <div className="card-footer flex justify-between mt-4">
          <p className=" font-thin text-blue-800">2023-11-09</p>
          <p className="card-footer-item">0</p>
        </div>
      </div>
    </div>
  );
};

export default Card;