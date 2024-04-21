import React from 'react'
import { Space, Spin } from "antd";

const Loader = () => {
  return (
    <div>
      <Space size="middle" className=' flex justify-center items-center w-screen h-screen flex-col'>
        <p>Loading... Please Wait...</p>
        <Spin size="large" />
      </Space>
    </div>
  );
}

export default Loader