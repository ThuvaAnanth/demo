import React, { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar'
import { Link,useParams} from 'react-router-dom';
import userPic from '../../assets/userSh.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function PaymentInforStaff() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnumber, setCnumber] = useState("");
  const [dateyear, setDateyear] = useState("");
  const [branch, setBranch] = useState("");
  const [cvc, setCvc] = useState([]);
  const [UserProfile, setUserProfile] = useState([]);
  const navigate = useNavigate();
  const{id} = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:3001/server/staffpayment/staffpaymentgetall/${id}`)
      .then((result) => {
        console.log("vfdfdfdf",result);
        setName(result.data.data[0].name);
        setEmail(result.data.data[0].email);
        setCnumber(result.data.data[0].cnumber);
        setDateyear(result.data.data[0].dateyear);
        setBranch(result.data.data[0].branch);
        setCvc(result.data.data[0].cvc);
      })


      .catch((err) => console.log(err));
  }, [id]);

           

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/server/staffpayment/staffpaymentupdate/${id}`, {
        name,
        email,
        cnumber,
        dateyear,
        cvc,
        branch,
      })
      .then((result) => {
        console.log(result);
        alert("Product update successfully!");
        navigate("/home");
      });
  };

  return (
    <div>
    <Navbar/>
  
    <div className='flex'>
      <div className='flex w-[300px] h-[1200px] bg-lime-900'>
        <div className='p-5'>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/staffAccount">Details</Link></button>
          <button className='w-[230px] h-[40px]  bg-gray-500 text-white rounded-2xl text-center my-3'><Link to="/PaymentInforStaff">Payment Infor</Link></button>
          <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'><Link to="/request">Request</Link></button>


        </div>
      </div>
      <div>
        <h1 className='text-center text-3xl'>Payment</h1>
        <div className='w-[150px] h-[150px]  rounded-full ml-[500px] mt-5 bg-gray-300 pt-3 -mb-[150px]'>
            <img src={userPic} alt="user image" className='w-[100px] h-[100px] m-auto ' />
          </div>


        <div className=' w-[700px] h-[800px] bg-gray-300 rounded-lg ml-52 mt-32'>
          <form className='px-6 py-8' onSubmit={handleUpdate} >
             <input
              className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
              type="text" 
              placeholder="Cash holder"
              name='cashHolder'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />

              <input
              className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
              type="text" 
              placeholder="Name of Bank"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />


              <input
              className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
              type="text" 
              placeholder="Card Number"
              value={cnumber}
              onChange={(e) => setCnumber(e.target.value)}
              />


              <input
              className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
              type="text" 
              placeholder="Date and year"
              value={dateyear}
              onChange={(e) => setDateyear(e.target.value)}
              />


              <input
              className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
              type="text" 
              placeholder="Cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              />

              <input
              className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4' 
              type="text" 
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              />


              <button className='w-[150px] h-[40px] bg-green-900 text-white rounded-xl text-center ml-96 mt-6'>Update</button>
          </form>
          </div>

        
        
      </div>
    </div>
  </div>
  )
}

export default PaymentInforStaff