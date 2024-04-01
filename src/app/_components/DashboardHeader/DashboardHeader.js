import React from 'react'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div>
        <div className=' w-full flex justify-between px-[15px] max-sm:px-[10px] py-[10px] '>
                <div className=' flex'>
                    <img src='/NodeDa.png' alt='' className=' w-[160px] max-md:w-[140px] max-sm:w-[140px]  h-[100%]   bg-cover object-cover' />
                    <FaBars size='1.5rem' className='pl-2 pt-1' />
                </div>
                
                <div className=' '>
                    <Link href="#" className='px-6 max-sm:px-2 py-2 text-center bg-[#BA4300] rounded-full text-white    max-sm:text-sm '>Sign Out</Link>

                </div>
            </div>
    </div>
  )
}

export default DashboardHeader