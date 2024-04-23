import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from "react-toastify"
import axios from "axios"
import Card from "./card"
const Board = (prop) => {
    const [isVisible, setIsVisible] = useState(false);
    const user = useSelector(state => state.user);
    const [cards, setCards] = useState([]);
    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const removeTaskBoard = () => {
        try {
            axios.delete(`http://localhost:10000/api/v1/list/${prop.id}`,

                {
                    // headers: {
                    //     Authorization: user.auth.token
                    // }
                }
            ).
                then((res) => {
                    console.log(res.data);

                    toast.success("List Deleted Sucessfully!", {
                        position: "top-right"
                    });
                }).
                catch((err) => {
                    toast.error("unable to delete list", {
                        position: "top-right"
                    });

                });
        } catch (error) {
            console.log(error);
        }


    }

    const updateListName = (req, res) => {
        try {
            axios.patch(`http://localhost:10000/api/v1/list/${prop.id}`,

                {
                    // headers: {
                    //     Authorization: user.auth.token
                    // }
                }
            ).
                then((res) => {
                    console.log(res.data);

                    toast.success("List Updated Sucessfully!", {
                        position: "top-right"
                    });
                }).
                catch((err) => {
                    toast.error("unable to update list", {
                        position: "top-right"
                    });

                });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setCards(prop.cards)

    }, [])

    // console.log(prop.listname);
    return (
        <div classname="px-4">
            <div className="board bg-gray-300 rounded-lg shadow-md">
                <div className="board-in p-4">
                    <div className="board-head flex justify-between items-center mb-4 flex-row">
                        <p className="board-card-title font-bold text-xl" contenteditable="true" onChange={updateListName}>{prop.listname} <span className="font-mono text-gray-500 pl-3" >{cards.length}</span></p>
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
                    <>
                        {
                            cards?.map((card, idx) => {

                                return <Card title={card.title} status={card.status} description={card.description}/>
                            })



                        }
                        
                    </>


                    <div className="w-full flex justify-center items-center cursor-pointer mt-3">
                        <div className=" w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Card</div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Board