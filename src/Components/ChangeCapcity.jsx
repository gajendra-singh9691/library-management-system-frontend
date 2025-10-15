import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ChangeCapcity = () => {
  const [value, setValue] = useState(0);

  const submithandler = async (e) => {
    e.preventDefault();
    if (value <= 0) {
      return toast.error(`${value} seats can't be added`);
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/seats/add`, { value });

      if (res.data.message === "Server error 500 not found") {
        return toast.error(res.data.message);
      }

      toast.success(res.data.message);
      setValue(0); // Reset input after success

    } catch (error) {
      console.log("Server error:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className='relative z-1 text-white flex flex-col items-center justify-center h-screen'>
      <form 
        onSubmit={submithandler} 
        className='flex flex-col backdrop-blur-[2px] gap-4 bg-[#2c3e5080] px-8 py-10 rounded-lg shadow-xl w-1/2'
      >
        <h2 className='text-center text-3xl font-bold'>Add Seats In Library</h2>

        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="capacity">Add More Seats:</label>
          <input 
            onChange={(e) => setValue(e.target.value)} 
            value={value} 
            className='border-b-1 border-gray-500 focus:outline-none p-1' 
            type="number" 
            id="capacity"
            required
          />
        </div>

        <input 
          className='border-1 border-gray-500 p-3 rounded-3xl cursor-pointer' 
          type="submit" 
          value="Change Library Capacity" 
        />
      </form>
    </div>
  );
};

export default ChangeCapcity;
