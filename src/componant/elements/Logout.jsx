import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import Config from "../../Config.json"

const App = () => {
    const token = sessionStorage.getItem("currentUserToken")
    const crtUser = sessionStorage.getItem("crtUser")
    const crtUserEmail = sessionStorage.getItem("crtUserEmail");
    const navigate = useNavigate();
    const currentUserData = {
        name: crtUser,
        userEmail: crtUserEmail
    }
    let BaseURL = Config.env[0].API_BASE_URL_LOCAL;
    if (Config.env[0].SERVER == "REMOTE") {
        BaseURL = Config.env[0].API_BASE_URL;
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        try {
            axios.get(BaseURL + "/api/v1/user/logout", {
                headers: {
                    Authorization: `${token}`
                }
            }).
                then((res) => {
                    navigate("/login");
                    toast.success("User Logout Sucessfully!", {
                        position: "top-right"
                    });

                }).
                catch((err) => console.log(err));

        } catch (error) {
            console.log(error);

        }
        sessionStorage.removeItem("currentUserToken");

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
        <div className='p-2 pt-0 rounded bg-white'>
        <Button  className='text-4xl text-center text-pink-600 font-bold py-2 px-4 rounded border-none' onClick={showModal}>
                {currentUserData?.name.split("")[0]}
            </Button>
        </div>
       
            <Modal title="Are you sure want to logout?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="bg-white p-6 rounded-lg shadow-lg z-50">
                    <h2 className="text-lg font-semibold mb-4">Logout Confirmation</h2>
                    <h1 className="text-xl mb-1 text-red-500 font-bold">
                        {currentUserData?.name}
                    </h1>
                    <h1 className="text-xs mb-4 text-black font-thin">
                        {currentUserData?.userEmail}
                    </h1>
                </div>
            </Modal>
        </>
    );
};
export default App;