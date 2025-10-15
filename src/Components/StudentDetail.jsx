import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StudentDetail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/students/all`);
        console.log(response.data.data);
        
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen relative z-1 text-white flex flex-col items-center">
      <h1 className="font-bold text-6xl text-center my-4">Student Details</h1>
      <div className="flex gap-8 justify-center flex-wrap items-center p-4 overflow-y-scroll">
        {data.map((student, index) => (
          <div key={index} className="bg-[#2c3e5080] text-white p-4 rounded-lg w-fit shadow-lg">
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone No:</strong> {parseInt(student.phone)}</p>
            <p><strong>Time:</strong> {student.timedurestion}</p>
            <p><strong>Seat No:</strong> {parseInt(student.seatNo) + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetail;
