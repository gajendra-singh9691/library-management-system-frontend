import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const RemoveStudent = () => {
  const [number, setNumber] = useState('');
  let time, seatNo;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const studRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/students/all`);

      if (studRes.data.data.length === 0) {
        return toast.error('0 student registered');
      }

      for (let i = 0; i < studRes.data.data.length; i++) {
        if (studRes.data.data[i].phone == number) {
          time = studRes.data.data[i].time;
          seatNo = studRes.data.data[i].seatNo;
          break;
        }
      }

      const seatobj = {};

      if (time === '6-12') {
        seatobj["6:00 - 9:00"] = false;
        seatobj["9:00 - 12:00"] = false;
      } else if (time === '12-18') {
        seatobj["12:00 - 15:00"] = false;
        seatobj["15:00 - 18:00"] = false;
      } else if (time === "18-24") {
        seatobj["18:00 - 21:00"] = false;
        seatobj["21:00 - 00:00"] = false;
      } else if (time === "0-6") {
        seatobj["00:00 - 3:00"] = false;
        seatobj["3:00 - 6:00"] = false;
      } else if (time === "6-18") {
        seatobj["6:00 - 9:00"] = false;
        seatobj["9:00 - 12:00"] = false;
        seatobj["12:00 - 15:00"] = false;
        seatobj["15:00 - 18:00"] = false;
      } else if (time === "18-6") {
        seatobj["18:00 - 21:00"] = false;
        seatobj["21:00 - 00:00"] = false;
        seatobj["00:00 - 3:00"] = false;
        seatobj["3:00 - 6:00"] = false;
      } else if (time === "6-24") {
        seatobj["6:00 - 9:00"] = false;
        seatobj["9:00 - 12:00"] = false;
        seatobj["12:00 - 15:00"] = false;
        seatobj["15:00 - 18:00"] = false;
        seatobj["18:00 - 21:00"] = false;
        seatobj["21:00 - 00:00"] = false;
      } else if (time === "12-6") {
        seatobj["12:00 - 15:00"] = false;
        seatobj["15:00 - 18:00"] = false;
        seatobj["18:00 - 21:00"] = false;
        seatobj["21:00 - 00:00"] = false;
        seatobj["00:00 - 3:00"] = false;
        seatobj["3:00 - 6:00"] = false;
      } else if (time === "0-24") {
        seatobj["00:00 - 3:00"] = false;
        seatobj["3:00 - 6:00"] = false;
        seatobj["6:00 - 9:00"] = false;
        seatobj["9:00 - 12:00"] = false;
        seatobj["12:00 - 15:00"] = false;
        seatobj["15:00 - 18:00"] = false;
        seatobj["18:00 - 21:00"] = false;
        seatobj["21:00 - 00:00"] = false;
      }

      const seatRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/seats/get`);
      const totalSeats = seatRes.data.data;

      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/seats/update`, {
          id: totalSeats[seatNo]._id,
          seatobj,
        });
      } catch (error) {
        return toast.error('Server error while updating seat');
      }

      const removeRes = await axios.post(`${import.meta.env.VITE_API_URL}/api/students/remove`, { phone: number });
      console.log(removeRes);

      toast.success('Student removed successfully');
      setNumber('');

    } catch (error) {
      console.log(error);
      // .error(error);
      // toast.error('Something went wrong');
    }
  };

  return (
    <div className='relative z-1 text-white flex flex-col items-center justify-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col backdrop-blur-[2px] gap-4 bg-[#2c3e5080] px-8 py-10 rounded-lg shadow-xl w-1/2'
      >
        <h2 className='text-center text-3xl font-bold'>Remove Student</h2>
        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="number">Student Number:</label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            className='border-b-1 border-gray-500 focus:outline-none p-1'
            type="number"
            id='number'
            required
          />
        </div>
        <input
          className='border-1 border-gray-500 p-3 rounded-3xl cursor-pointer'
          type="submit"
          value="Remove Student"
        />
      </form>
    </div>
  );
};

export default RemoveStudent;
