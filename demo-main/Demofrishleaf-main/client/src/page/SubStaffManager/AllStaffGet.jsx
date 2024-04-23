import React, { useState, useEffect } from 'react'
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom';
import userPic from '../../assets/userSh.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";




function AllStaffGet() {

  const [UserProfile, setUserProfile] = useState([]);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/server/StaffInfo/detailsStaffInfogetAll")
      .then((result) => {
        console.log("data: ", typeof result.data.data); // Check the fetched data
        console.log("data: ", Object.values(result.data.data)); // Check the fetched data
        setUserProfile(result.data ? Object.values(result.data.data) : []);
      })
      .catch((err) => console.error(err)); // Log any errors

      console.log(UserProfile,"cdcdcdcd")
  }, []);


  //delete method
  const handleDelete = (id)=>
  {
    axios.delete(`http://localhost:3001/server/StaffInfo/detailsStaffInfodelete/${id}`)
    .then(res=>{console.log(res)
        window.location.reload()
    } )
    .catch(err=>console.log(err))
  }

  //Search part
      const filtredAllStaffGet = UserProfile.filter((Staffdetails) =>
      Staffdetails.name.toLowerCase().includes(searchTerm.toLowerCase())
);
      
           


  return (
    <div>
    <Navbar/>

    {/* search */}
    <div className="w-[300px] ml-[50px]">
          <label>
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class=" fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class="search"
              placeholder="Search for anything..."
              type="text"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}            />
          </label>
          </div>
  
    <div className='flex'>
      <div className='flex w-[300px] h-[1200px] bg-lime-900'>
        <div className='p-5'>
        <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/StaffManagerAccount">StaffManagerAccount</Link></button>
            <button className='w-[230px] h-[40px]  bg-gray-200 rounded-2xl text-center my-3'><Link to="/PaymentInforStaffMan">Payment Infor</Link></button>
            <button className='w-[230px] h-[40px]  bg-gray-200  rounded-2xl text-center my-3'><Link to="/Responce">Responce</Link></button>
            <button className='w-[230px] h-[40px]  bg-gray-500 text-white  rounded-2xl text-center my-3'><Link to="/AllStaffGet">Staff Infor</Link></button>

        </div>
      </div>
      <div>
        <h1 className='text-center text-3xl'>Staff Details</h1>
         
       

        <div >
        <Link to={`/AllStaffCreate`} className="px-2 py-1 bg-green-900 rounded-sm text-white mx-2 ">Create</Link>
        <div className="w-3/4 bg-white rounded p-4 w-full">
              <table className="w-full border">
                <thead className=''>
                  <tr className="bg-gray-200  w-full">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Experienc</th>
                    <th>Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {/* get all data from db */}
                  {filtredAllStaffGet.map((profile, index) => (
                    <tr key={index}>
                      <td className=' px-10'>{profile.name}</td>
                      <td className=' px-10'>{profile.email}</td>
                      <td className=' px-10'>{profile.gender}</td>
                      <td className=' px-10'>{profile.exprience}</td>
                      <td className=' px-10'>{profile.batch}</td>
                      <td className="border p-2 flex items-center  justify-around px-10">
                      <Link to={`/AllStaffUpdatePage/${profile._id}`} className="px-2 py-1  bg-yellow-700 rounded-sm text-white  flex items-center">
                      <RxUpdate className='mr-1' /> Update
                      </Link>                        
                      <button className="px-2 py-1  flex items-center bg-red-700 rounded-sm text-white mx-2" onClick={(e)=>handleDelete(profile._id)}><RiDeleteBin6Line  className='mr-1' />Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
      </div>
    </div>
  </div>
  )
}

export default AllStaffGet