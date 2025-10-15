import axios from "axios";
import { useEffect, useState } from "react";

const SetsAvilable = () => {
  const [totalSeats, setTotalSets] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/seats/get`);
        setTotalSets(response.data.data);
      } catch (error) {
        console.error("Server error while fetching seat details:", error);
      }
    };

    fetchSeats();
  }, []);

  return (
    <div className='relative z-1 text-white flex justify-center py-20 h-11/12 overflow-scroll'>
      <table className='w-2/3 bg-[#2c3e5080] py-3 text-nowrap'>
        <thead>
          <tr>
            <th className='px-3 py-2 border-1 text-center'>SeatNo</th>
            <th className='px-3 py-2 border-1 text-center'>00:00 - 03:00</th>
            <th className='px-3 py-2 border-1 text-center'>03:00 - 06:00</th>
            <th className='px-3 py-2 border-1 text-center'>06:00 - 09:00</th>
            <th className='px-3 py-2 border-1 text-center'>09:00 - 12:00</th>
            <th className='px-3 py-2 border-1 text-center'>12:00 - 15:00</th>
            <th className='px-3 py-2 border-1 text-center'>15:00 - 18:00</th>
            <th className='px-3 py-2 border-1 text-center'>18:00 - 21:00</th>
            <th className='px-3 py-2 border-1 text-center'>21:00 - 00:00</th>
          </tr>
        </thead>
        <tbody className='h-2/4'>
          {totalSeats.map((seat, index) => (
            <tr key={index}>
              <td className='text-center text-xl py-2 border-1'>{index + 1}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["00:00 - 3:00"] ? "❌" : "✅"}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["3:00 - 6:00"] ? "❌" : "✅"}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["6:00 - 9:00"] ? "❌" : "✅"}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["9:00 - 12:00"] ? "❌" : "✅"}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["12:00 - 15:00"] ? "❌" : "✅"}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["15:00 - 18:00"] ? "❌" : "✅"}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["18:00 - 21:00"] ? "❌" : "✅"}</td>
              <td className='text-center text-2xl py-0.5 border-white border-1'>{seat["21:00 - 00:00"] ? "❌" : "✅"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SetsAvilable;
