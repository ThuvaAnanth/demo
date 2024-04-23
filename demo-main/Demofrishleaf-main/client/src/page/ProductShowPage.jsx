import React,{ useState, useEffect }from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import tea from '../assets/tea.jpg';
import { Link } from 'react-router-dom';
import axios from "axios";


function ProductShowPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3001/server/inventoryapi/inventoryGetAll") // Provide the correct URL here
        .then((result) => {
          console.log("data: ", typeof result.data.data); // Check the fetched data
          console.log("data: ", Object.values(result.data.data)); // Check the fetched data
          setUsers(result.data ? Object.values(result.data.data) : []);
        })
        .catch((err) => console.error(err)); // Log any errors
    }, []);
  return (
    <div className='font-serif'>
    <Navbar/>
    <h1 className='text-center  my-8 text-5xl'>Product List</h1>
    <div className='flex flex-wrap gap-3 my-9 ml-24 mt-6 w-[1350px]'>
  {users.map((user, index) => (
    <div key={user._id} className='flex bg-gray-200 rounded-3xl w-[650px] h-[250px]'>
      <img src={tea} alt="tea" className='w-50 h-50 p-1 rounded-[30px]' />
      <div className='flex-1 flex flex-col justify-between px-2 py-4'>
        <div>
          <h1 className='font-bold text-pretty text-2xl'>{user.name}</h1>
          <p className='text-xl text-center mt-5'>{user.des}</p>
          <p className='text-center font-bold p-2 text-4xl'>{user.price}</p>
        </div>
        <div className='flex justify-center'>
          {/* <button onClick={() => handleDelete(user._id)} className='bg-red-500 text-white rounded-2xl px-4 py-1 mr-2'>Delete</button> */}
          <Link /*to={`/edit/${user._id}`}*/ className='bg-green-800 text-white ml-44 rounded-2xl px-6 text-2xl py-1 mr-2'>Get Now</Link>
        </div>
      </div>
    </div>
  ))}
</div>


    <Footer/>
    </div>
  )
}

export default ProductShowPage