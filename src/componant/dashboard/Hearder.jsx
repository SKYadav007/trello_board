import React, { useState, useEffect } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { FaTrello } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io"
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogout } from '../../redux/userlogout';
import Logout from '../elements/Logout';


const Hearder = () => {
    const logout = useSelector(state => state.logout.logoutmodal);
    const dispatch = useDispatch();
    const [isMobileView, setIsMobileView] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogOut = (e) => {
        e.preventDefault();
        setIsOpen(true);
    }



    const clickSearchExpand = (e) => {
        e.preventDefault();
        let searchIn = document.querySelector(".search");
        window.innerWidth >= 1024 ?
            searchIn.style.width = "40rem" : ""

    }
    const handleCancel = () => {
        setIsOpen(false);
        console.log("hello");
    };
    return (
        <div><header className=' flex gap-3'>
            <nav className='flex gap-5  cursor-pointer items-center flex-wrap '>
                {
                    isMobileView && (
                        <CgMenuGridO size={30} className='text-white' onClick={() => setIsMobileView(!isMobileView)} />
                    )
                }

                <a className='flex items-center gap-1 text-white cursor-pointer'>
                    < FaTrello size={20} />
                    Trello
                </a>

                {isMobileView && (
                    <div className=' p-2 flex  rounded-md flex-row gap-3'>

                        <a className='flex justify-center items-center gap-1 text-white'>
                            Workspaces <SlArrowDown size={12} />
                        </a>
                        <a className='flex justify-center items-center gap-1 text-white'>
                            Recent <SlArrowDown size={12} />
                        </a>
                        <a className='flex justify-center items-center gap-1 text-white'>
                            Starred <SlArrowDown size={12} />
                        </a>
                        <a className='flex justify-center items-center gap-1 text-white'>
                            Templetes <SlArrowDown size={12} />
                        </a>
                    </div>
                )}
                {
                    isMobileView && (
                        <button className='p-2 '>Create</button>
                    )
                }

            </nav>

            <div className='flex flex-row items-center gap-1 mr-1 cursor-pointer'>
                <div className='flex items-center bg-white p-1 rounded-md w-full'>
                    <GoSearch />
                    <input type="text" className='search w-full p-1' placeholder='Search' onClick={clickSearchExpand} />
                </div>
                {isMobileView && (
                    <div className='flex  items-center gap-1 ml-2 flex-row'>
                        <IoIosNotificationsOutline className='text-white' size={25} />
                        <HiOutlineInformationCircle className='text-white' size={25} />
                    </div>
                )}
               
                    <Logout />

                
            </div>
        </header></div>
    )
}

export default Hearder