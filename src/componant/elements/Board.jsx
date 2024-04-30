import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from "react-toastify"
import axios from "axios"
import Card from "./card"
import Config from "../../Config.json"
import AddNewCard from './AddNewCard';

const Board = (prop) => {
    const [isVisible, setIsVisible] = useState(false);
    const user = useSelector(state => state.user);
    const contentEditableRef = useRef(null);
    const [cards, setCards] = useState([]);
    const token = sessionStorage.getItem("currentUserToken");

    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    let BaseURL = Config.env[0].API_BASE_URL_LOCAL;
    if (Config.env[0].SERVER == "REMOTE") {
        BaseURL = Config.env[0].API_BASE_URL;
    }

    const removeTaskBoard = async () => {
        await deleteList();
    }

    const updateListName = (req, res) => {
        try {
            axios.patch(`http://localhost:10000/api/v1/list/${prop.id}`,

                {
                    headers: {
                        Authorization: token
                    }
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
    const deleteList = async () => {
        try {
            await axios.delete(BaseURL + "/api/v1/list/" + prop.id,
                {
                    headers: {
                        Authorization: token
                    }
                })
            toast.success("List Deleted Sucessfully!", {
                position: "top-right"
            });

        } catch (error) {
            console.log(error);
        }

    };

    const loadCards = async () => {
        try {
            if (prop.cards[0] != null) {
                const fetchedCards = prop.cards.map(async (cardId, idx) => {
                    const data = await axios.get(BaseURL + `/api/v1/card/${cardId ? cardId : "no-cards"}`, {
                        headers: {
                            Authorization: token
                        }
                    })

                    return data.data.cards;

                });
                const dataArr = await Promise.all(fetchedCards);

                setCards(dataArr);
            }
        } catch (error) {
            // console.log(error);
        }

    };

    const addCardToTheList = async () => {


    }
    useEffect(() => {
        const fetchCards = async () => {
            await loadCards();
        }
        fetchCards()
    }, [])
    return (
        <div className="px-4">
            <div className="board bg-gray-300 rounded-lg shadow-md">
                <div className="flex flex-col  p-4">
                    <div className="board-head flex justify-between items-center mb-4 flex-row">
                        <p ref={contentEditableRef} key={prop.id} className="board-card-title font-bold text-xl" >{prop.listname} <span className="font-mono text-gray-500 pl-3">{cards.length}</span></p>
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
                                return <Card key={idx} title={card?.title} status={card?.status} description={card?.description} createdDate={card?.createdDate} />
                            })


                        }

                    </>


                    <div className="w-full flex justify-center items-center cursor-pointer mt-3">
                        {/* <div className=" w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addCardToTheList}>+ Add Card</div> */}
                        <AddNewCard />
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Board