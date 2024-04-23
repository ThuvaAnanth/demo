import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'


function OwnerPage() {
  return (
    <div>
 <div className='flex justify-between pr-5 pb-5 mt-4 px-14 w-[1200px] '>
    <div><img  className='w-[120px] h-[62px] ' src={Logo} alt='Logo'/></div>
    <div>
        <ul className='flex gap-6'>
          <li className='hover:text-[#b4df83] hover:border-solid cursor-pointer text-2xl font-serif'>Owner Dashboard</li>
        </ul>
    </div>
    <div><h1 className='Navbart_btn'>Login</h1></div>
    </div>
  <hr/>
  
    <div className='flex pt-4'>
       
        <div className="flex w-[300px] h-[1200px] bg-lime-900">
          <div className="p-5">
            <button className="w-[230px] h-[40px] bg-gray-500 text-white rounded-2xl text-center my-3">
              <Link to="/userAccount">User Infor</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/supplierAccount">Supplier Infor</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/inventryProfile">Inventory Infor</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/request">Staff Infor</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/request">Shipment Infor</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/request">Promotion Infor</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/request">Payment Infor</Link>
            </button>
          </div>
        </div>
        <div className=' w-[900px] pr-4 pl-4\3 h-[500px] flex'>
            <div className='mr-4 pr-4 '>
                <div className='bg-lime-200 w-[1000px] h-[250px] flex-grow text-center rounded-r-lg'>
                  <hi className='text-black text-2xl font-serif'>INVENTRY DETAILS</hi>
                </div> 
                <div className='bg-emerald-200 h-[250px] flex-grow text-center rounded-r-lg'>
                  <hi className='text-black text-2xl font-serif'>NOTIFICATION</hi>
                </div>
            </div>
        </div>    
    </div>
    <br/>
    <div className='w-[1300px]'>
    <Footer/>
    </div>

    </div>
  )
}

export default OwnerPage