import React, { } from 'react'
import Board from '../elements/Board'
import LeftHeaders from '../dashboard/LeftHeaders'
import Header from "../dashboard/Hearder"
import CreateBoard from '../elements/CreateBoard'

const Home = () => {


  return (
    <div>
      <Header />
      <div className='flex max-md:flex-col mt-2 ml-2 max-lg:justify-center max-md:items-center'>
        {/* <LeftHeaders /> */}
        {/* <Board /> */}
        <CreateBoard/>
        
      </div>

    </div>
  )
}

export default Home