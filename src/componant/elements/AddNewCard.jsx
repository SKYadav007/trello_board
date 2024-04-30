import { Button, Modal } from 'antd'
import React, { useState } from 'react'

const AddNewCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const crtUser = sessionStorage.getItem("crtUser")
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const options = [
        { value: 'To Do', label: 'To Do', color: "#FF3300" },
        { value: 'In Progress', label: 'In Progress', color: "#0033FF" },
        { value: 'Review', label: 'Review', color: "#663300" },
        { value: 'Done', label: 'Done', color: "#00CC00" },
      ];
      const handleOnchnage = (e) => {
        setStatus(e.target.value);
        console.log(e.target.value);
        manageBGColorOfStatusDD();
        console.log(bgcolor);
      }
    
      const manageBGColorOfStatusDD = () => {
        if (status == options[0].value) {
          setbgColor(options[0].color);
    
        } else
          if (status == options[1].value) {
            setbgColor(options[1].color);
    
          } else
            if (status == options[2].value) {
              setbgColor(options[2].color);
    
            } else
              if (status == options[3].value) {
                setbgColor(options[3].color);
              }
    
      }
    return (
        <>
            <Button type="primary" className=' w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={showModal}>
                + Add Card
            </Button>
            <Modal  title="Create Card" open={isModalOpen}  okText="Create Card"onOk={handleOk} onCancel={handleCancel}>
                <div className=" p-6 rounded-lg shadow-lg z-50 bg-pink-200">
                    <h1 className='text-bold text-blue-600'>{crtUser}</h1>
                    <h2 className="text-xl mb-1 text-black-500 font-semibold">Title</h2>
                    <textarea className="border-2 p-4 text-rose-300 text-xl" cols={25} rows={3}></textarea>
                    <h2 className="text-xl mb-1 text-black-500 font-semibold">
                        Status
                    </h2>
                    <select className="rounded font-semibold bg-rose-400 text-white"  onSelect={handleOnchnage} >

                        <option className='text-center' style={{ color: "#FF3300" }} value={options[0].value}>  {options[0].label}</option>
                        <option className='text-center' style={{ color: "#0033FF" }} value={options[1].value}>  {options[1].label}</option>
                        <option className='text-center' style={{ color: "#663300" }} value={options[2].value}>  {options[2].label}</option>
                        <option className='text-center' style={{ color: "#00CC00" }} value={options[3].value}>  {options[3].label}</option>

                    </select>
                    <h1 className="text-xs mb-4 text-black font-thin">

                    </h1>
                </div>
            </Modal>
        </>
    )
}

export default AddNewCard