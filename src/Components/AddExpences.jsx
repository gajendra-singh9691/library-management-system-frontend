import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddExpences = () => {
  const [amount, setAmount] = useState(0);
  const [reason, setReason] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reason.trim()) {
      return toast.error('Please enter a valid reason');
    }

    if (!paymentMode) {
      return toast.error('Please select a payment mode');
    }

    if (!amount || amount <= 0) {
      return toast.error("Invalid amount — must be greater than 0");
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/expenses/add`,
        { reason, paymentMode, amount }
      );

      toast.success(res.data.message || 'Expense added successfully');
      setReason('');
      setPaymentMode('');
      setAmount(0);
    } catch (error) {
      console.error('Error adding expense:', error);
      toast.error('Server error, please try again');
    }
  };

  return (
    <div className='relative z-1 text-white flex flex-col items-center justify-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col backdrop-blur-[2px] gap-4 bg-[#2c3e5080] px-8 py-10 rounded-lg shadow-xl w-1/2'
      >
        <h3 className='text-center text-3xl font-bold'>Add Expenses</h3>

        <div className='flex flex-col justify-between items-center text-xl gap-2'>
          {/* Reason */}
          <div className='flex justify-between w-full'>
            <label htmlFor='reason'>Enter Reason</label>
            <input
              onChange={(e) => setReason(e.target.value)}
              value={reason}
              type='text'
              id='reason'
              className='border-b-1 border-gray-500 focus:outline-none p-1'
              required
            />
          </div>

          {/* Payment Mode */}
          <div className='flex justify-between w-full'>
            <label htmlFor='paymentMode'>Payment Mode</label>
            <select
              onChange={(e) => setPaymentMode(e.target.value)}
              value={paymentMode}
              id='paymentMode'
              className='bg-[#2c3e5080]'
              required
            >
              <option value=''>--Select--</option>
              <option value='offline'>Offline</option>
              <option value='online'>Online</option>
            </select>
          </div>

          {/* Amount */}
          <div className='flex justify-between w-full'>
            <label htmlFor='amount'>Enter Amount</label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              className='border-b-1 border-gray-500 focus:outline-none p-1'
              id='amount'
              type='number'
              min='1'
              required
            />
          </div>
        </div>

        <input
          type='submit'
          value='Add Amount'
          className='border-1 border-gray-500 p-3 rounded-3xl cursor-pointer'
        />
      </form>
    </div>
  );
};

export default AddExpences;
