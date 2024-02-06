import React from 'react'
import logo from "../assets/logo.svg"
import { IoChevronDown } from 'react-icons/io5'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center pl-[160px] pr-[160px] pt-4 pb-4 bg-white'>
    <img src={logo} alt='logo' />
    <div className='flex flex-row items-center'>

    <h3 className='font-normal text-[16px] mr-1'>Sandeep Sharma</h3>
    <IoChevronDown size={"1.2rem"}/>
    </div>
  </div>
  )
}

export default Header