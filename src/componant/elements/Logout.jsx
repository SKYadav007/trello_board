import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const App = () => {
    const navigate = useNavigate();
    const currentUserData = {
        name: "Vire",
        userEmail: "softech.vire@gmail.com"
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);

        const token = localStorage.getItem("currentUserToken")
        try {
            axios.get("http://localhost:10000/api/v1/user/logout", {
                headers: {
                    Authorization: `${token}`
                }
            }).
                then((res) => {
                    navigate("/login");
                }).
                catch((err) => console.log(err));

        } catch (error) {
            console.log(error);

        }
        localStorage.removeItem("currentUserToken");

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" className='text-xl text-pink-400 font-bold border-none' onClick={showModal}>
                {currentUserData?.name.split("")[0]}
            </Button>
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