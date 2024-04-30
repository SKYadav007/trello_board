import React, { useEffect, useState } from 'react';
import Config from "../../Config.json"
import Modal from 'antd/es/modal/Modal';
import { useRef } from 'react';



const Card = (prop) => {

  const [date, setDate] = useState("11-03-2023");
  const selectRef = useRef(null);
  const [status, setStatus] = useState("");
  const [bgcolor, setbgColor] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let BaseURL = Config.env[0].API_BASE_URL_LOCAL;
  if (Config.env[0].SERVER == "REMOTE") {
    BaseURL = Config.env[0].API_BASE_URL;
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const removeTaskBoard = (e) => {
    e.preventDefault();

  }
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

  useEffect(() => {

  }, [status])
  return (
    <>
      <Modal className='text-green-700' title={prop.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='flex gap-6 flex-col'>


          <div className='card-container  flex gap-3'>
            <label className='text-blue-700 font-semibold'>Status</label>
            <select className="rounded font-semibold" onChange={handleOnchnage} style={{ backgroundColor: "gray", color: "white" }} >

              <option className='text-center' style={{ color: "#FF3300" }} value={options[0].value}>  {options[0].label}</option>
              <option className='text-center' style={{ color: "#0033FF" }} value={options[1].value}>  {options[1].label}</option>
              <option className='text-center' style={{ color: "#663300" }} value={options[2].value}>  {options[2].label}</option>
              <option className='text-center' style={{ color: "#00CC00" }} value={options[3].value}>  {options[3].label}</option>

            </select>
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-700 font-semibold'>Discription</label>
            <textarea className='p-3' cols={9} rows={5} contentEditable={true}>{prop.description}</textarea>
          </div>
          <div className="flex  flex-row gap-6">
            <label className='text-pink-800'>Date</label>
            <p className='text-black'>{date}</p>
          </div>
        </div>
      </Modal>
      <div onClick={showModal} className="board-card relative" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}>

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
            <p className=" font-thin text-blue-800">{prop.createdDate}</p>
            <p className="card-footer-item">0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;