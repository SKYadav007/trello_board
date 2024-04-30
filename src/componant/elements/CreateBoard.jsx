import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from "axios"
import Board from './Board';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from "../../Config.json"

const CreateBoard = () => {
    const user = useSelector(state => state.user);
    const [addlist, setAddList] = useState(false);
    const [list, setList] = useState('');
    const [listData, setListData] = useState([]);
   const token= sessionStorage.getItem("currentUserToken");
   const crtUserId= sessionStorage.getItem("crtUserID");

    let BaseURL = Config.env[0].API_BASE_URL_LOCAL;
    if (Config.env[0].SERVER == "REMOTE") {
        BaseURL = Config.env[0].API_BASE_URL;
    }
    const listColor = ["#66CCFF", "#FF9999", "#6699FF", , "#6666FF", "#0099FF", "#333366", "#003366", "#000099", "#CC3399", "#6600CC"]
    const handleCreateList = () => {
        try {
            axios.post(BaseURL + "/api/v1/list/create",

                {
                    userID: crtUserId,
                    "listname": list,
                },
                {
                    headers: {
                        Authorization:token
                    }

                }
            ).
                then((res) => {
                    console.log(res.data);
                    
                    toast.success("List created Sucessfully!", {
                        position: "top-right"
                    });
                }).
                catch(() => {
                    toast.error("unable to create the list!", {
                        position: "top-right"
                    });
                });
        } catch (error) {
            console.log(error);
        }
        addlist ? setAddList(false) : "";
       
    }
useEffect(()=>{
   const fetchList=async()=>{
    await loadList();
   }
   fetchList();
},[])
 
 
const loadList = async () => {
    try {
        const fetchedList =  await  axios.get(BaseURL + "/api/v1/list",
            {
                headers: {
                    Authorization: token
                }
            })                              
       
        setListData(fetchedList.data.list);
    } catch (error) {
        console.log(error);
    }
};
    return (
        <div className='flex flex-row justify-start items-center gap-5 overflow-x-scroll max-lg:flex-col'>
            <>
                {
                   listData?.map((list, idx) => {
                      
                        return (<div key={list._id} className='w-full flex justify-center items-center text-center font-bold py-2 px-4 bg-red-300 rounded' style={{ backgroundColor: listColor[idx] }}><Board index={idx} listname={list.listname} id={list._id} cards={list.cards} /></div>)

                    })
                }
            </>
            <div>
                {
                    addlist && (
                        <div className=' flex flex-col items-center  justify-center gap-2 m-2 mt-10'>
                            <input placeholder='Enter list title...' className='w-64 py-2 px-2 border-solid  border border-indigo-600 rounded-lg' type="list"
                                id="list"
                                value={list}
                                onChange={(e) => setList(e.target.value)}
                            ></input>
                            <div className='w-full flex gap-4 '>
                                <button className='text-sm bg-blue-500 text-white p-1' onClick={
                                    handleCreateList

                                }>Add List</button>
                                <button className='p-1' onClick={() => (addlist ? setAddList(false) : "")}>X</button>
                            </div>

                        </div>
                    )
                }
            </div>


            <div className="w-80  flex justify-center items-center cursor-pointer m-3">
                <div className=" w-64   text-center bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-8 rounded" onClick={() => (addlist ? "" : setAddList(true))}>Add List </div>
            </div>
        </div>
    )
}

export default CreateBoard