import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TotalAmount = () => {
  const [income, setIncome] = useState([]);
  const [expance, setExpance] = useState([]);

  let onlineIncome = 0;
  let offlineIncome = 0;
  let onlineExpances = 0;
  let offlineExpances = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expancesData = await axios.get(`${import.meta.env.VITE_API_URL}/api/expenses/show`);
        const incomeData = await axios.get(`${import.meta.env.VITE_API_URL}/api/income/show`);
        setExpance(expancesData.data.data);
        setIncome(incomeData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Calculate totals
  income.forEach(item => {
    if (item.paymentmode === 'online') onlineIncome += parseInt(item.amount);
    else offlineIncome += parseInt(item.amount);
  });

  expance.forEach(item => {
    if (item.paymentMode === 'online') onlineExpances += parseInt(item.amount);
    else offlineExpances += parseInt(item.amount);
  });

  const totalIncome = onlineIncome + offlineIncome;
  const totalExpances = onlineExpances + offlineExpances;
  const profit = totalIncome - totalExpances;

  return (
    <div className='relative z-1 text-white flex p-10 justify-around h-screen text-nowrap'>
      {/* Income Table */}
      <div className='bg-[#2c3e5080] px-8 py-4 '>
        <h1 className='font-bold text-xl'>INCOME</h1>
        <table>
          <tbody>
            {income.map((element, index) => (
              <tr key={index}>
                <td className='p-2 w-10 min-w-fit text-center'>{element.amount}</td>
                <td className='p-2 w-15 min-w-fit text-center'>{element.name}</td>
                <td className='p-2 w-10 min-w-fit text-center'>{element.paymentmode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Expenses Table */}
      <div className='bg-[#2c3e5080] px-8 py-4 '>
        <h1 className='font-bold text-xl'>EXPENSES</h1>
        <table>
          <tbody>
            {expance.map((element, index) => (
              <tr key={index}>
                <td className='p-2 w-10 min-w-fit text-center'>{element.amount}</td>
                <td className='p-2 w-15 min-w-fit text-center'>{element.reason}</td>
                <td className='p-2 w-10 min-w-fit text-center'>{element.paymentMode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className='bg-[#2c3e5080] px-8 py-4 flex flex-col gap-4 h-fit'>
        <h2>Total Online Income: {onlineIncome}</h2>
        <h2>Total Offline Income: {offlineIncome}</h2>
        <h2>Total Income: {totalIncome}</h2>
        <h2>Total Online Expenses: {onlineExpances}</h2>
        <h2>Total Offline Expenses: {offlineExpances}</h2>
        <h2>Total Expenses: {totalExpances}</h2>
        <h2>Profit Amount: {profit}</h2>
      </div>
    </div>
  );
};

export default TotalAmount;
