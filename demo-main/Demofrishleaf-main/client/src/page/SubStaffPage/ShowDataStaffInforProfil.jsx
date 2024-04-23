import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Navbar from "../../component/Navbar"; // Import Navbar component
import { Link } from "react-router-dom";
import userPic from "../../assets/userSh.png";
import axios from "axios";

function ShowDataStaffInforProfil() {
  const [UserProfile, setUserProfile] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/server/details/detailsget")
      .then((result) => {
        console.log("data: ", typeof result.data.data); // Check the fetched data
        console.log("data: ", Object.values(result.data.data)); // Check the fetched data
        setUserProfile(result.data ? Object.values(result.data.data) : []);
      })
      .catch((err) => console.error(err)); // Log any errors

    console.log(UserProfile, "cdcdcdcd");
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/server/details/detailsdelete/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar /> {/* Assuming Navbar component is defined */}
      <div className="flex">
        <div className="flex w-[300px] h-[1200px] bg-lime-900">
          <div className="p-5">
            <button className="w-[230px] h-[40px] bg-gray-500 text-white rounded-2xl text-center my-3">
              <Link to="/staffAccount">Details</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/PaymentInforStaff">Payment Infor</Link>
            </button>
            <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
              <Link to="/request">Request</Link>
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center">Staff Account</h1>
          <div className="w-[150px] h-[150px]  rounded-full ml-[500px] mt-5 bg-gray-300 pt-3 -mb-[150px]">
            <img
              src={userPic}
              alt="user image"
              className="w-[100px] h-[100px] m-auto "
            />
          </div>
          <div className=" w-[700px] h-[600px] rounded-lg ml-52 mt-52">
            <div className="w-3/4 bg-white rounded p-4">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-200">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Experience</th>
                    <th>Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {/* get all data from db */}
                  {UserProfile.map((profile, index) => (
                    <tr key={index}>
                      <td>{profile.name}</td>
                      <td>{profile.email}</td>
                      <td>{profile.gender}</td>
                      <td>{profile.exprience}</td>
                      <td>{profile.batch}</td>
                      <td className="border p-2 flex items-center  justify-around">
                        {/* Assuming RxUpdate component is imported */}
                        <Link
                          to={`/staffupdate/${profile._id}`}
                          className="px-2 py-1 bg-yellow-700 rounded-sm text-white mx-2 "
                        >Update 
                          {/* Assuming RxUpdate component is defined */}
                          {/* <RxUpdate /> */}
                        </Link>
                        <button
                          className="px-2 py-1 bg-red-700 rounded-sm text-white mx-2"
                          onClick={(e) => handleDelete(profile._id)}
                        >
                          Delete
                        </button>
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
  );
}

export default ShowDataStaffInforProfil;
