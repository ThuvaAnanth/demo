import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Navbar from '../../component/Navbar';
import { Link, useParams } from 'react-router-dom'; // Import useParams to access route parameters
import axios from 'axios';

function AllStaffUpdatePage() {
  const { id } = useParams(); // Retrieve the id parameter from the URL

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState(""); // Corrected spelling
  const [batch, setBatch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/server/StaffInfo/detailsStaffInfoGetOne/${id}`)
      .then((result) => {
        console.log("vfdfdfdf",result);
        setName(result.data.data[0].name);
        setEmail(result.data.data[0].email);
        setGender(result.data.data[0].gender);
        setExperience(result.data.data[0].exprience);
        setBatch(result.data.data[0].batch);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/server/StaffInfo/detailsStaffInfoupdate/${id}`, {
        name,
        email,
        gender,
        experience, // Corrected spelling
        batch,
      })
      .then((result) => {
        console.log(result);
        alert("Staff member updated successfully!");
        // You can redirect to another page or perform any other action upon successful update
      })
      .catch((error) => {
        console.error('Error updating staff member:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div className='flex w-[300px] h-[1200px] bg-lime-900'>
          <div className='p-5'>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'>
              <Link to="/StaffManagerAccount">StaffManagerAccount</Link>
            </button>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'>
              <Link to="/PaymentInforStaffMan">Payment Info</Link>
            </button>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'>
              <Link to="/Response">Response</Link>
            </button>
            <button className='w-[230px] h-[40px] bg-gray-500 text-white rounded-2xl text-center my-3'>
              <Link to="/AllStaffGet">Staff Info</Link>
            </button>
          </div>
        </div>
        <div>
          <h1 className='text-center text-3xl'>Update Staff Details</h1>
          <div className="w-[700px] h-[600px] bg-gray-300 rounded-lg ml-52 mt-32">
            <form className="px-6 py-8" onSubmit={handleUpdate}>
              <input
                className="w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
              />
              <input
                className="w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              <input
                className="w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4"
                type="text"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Gender"
              />
              <input
                className="w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4"
                type="text"
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Experience"
              />
              <input
                className="w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4"
                type="text"
                name="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                placeholder="Batch"
              />
              <button className="w-[190px] h-[40px] bg-green-900 text-white rounded-xl text-center mt-6">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllStaffUpdatePage;
