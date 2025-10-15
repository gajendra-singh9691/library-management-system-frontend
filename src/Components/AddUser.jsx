import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const AddUser = () => {
  const timeDurestionRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentmode, setpaymentmode] = useState('')
  const [time, settime] = useState('');
  const [timedurestion, settimedurestion] = useState('');
  const [subscription, setsubscription] = useState('')
  const [seat, setSeat] = useState('')
  const [totalSets, setTotalSets] = useState([])
  const [selectedValue, setSelectedValue] = useState([]);
  const [amount, setamount] = useState(0)

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/seats/get`);
        setTotalSets(response.data.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetch()
  },[])

  const paymentmodechange = (e) => {
    setpaymentmode(e.target.value)
  }

  const options = {
    six: ['6-12', '12-18', '18-24', '0-6'],
    twelve: ['6-18', '18-6'],
    eighteen: ['6-24', '12-6'],
    twentyfour: ['0-24']
  }

  const changetimeoption = (e) => {
    settimedurestion(e.target.value)
    let value = e.target.value;
    if (value == "twelve") {
      setSelectedValue(options.twelve);
    }
    else if (value == "six") {
      setSelectedValue(options.six)
    }
    else if (value == "eighteen") {
      setSelectedValue(options.eighteen)
    }
    else {
      setSelectedValue(options.twentyfour)
    }
  }

  const subscriptionchange = (e) => {
    setsubscription(e.target.value);
    if (e.target.value != '') {
      timeDurestionRef.current.disabled = false;
    }
  }

  const changeseat = (e) => {
    setSeat(e.target.value)
  }

  const changetime = (e) => {
    settime(e.target.value)
    let value = e.target.value;
    if (value == '6-12' || value == '12-18' || value == '18-24') {
      if (subscription == '1') {
        setamount(400)
      }
      else if (subscription == '2') {
        setamount(800)
      }
      else if (subscription == '3') {
        setamount(1200)
      }
      else if (subscription == '6') {
        setamount(2400)
      }
      else if (subscription == '12') {
        setamount(4800)
      }
    }
    else if (value == '0-6') {
      if (subscription == '1') {
        setamount(300)
      }
      else if (subscription == '2') {
        setamount(600)
      }
      else if (subscription == '3') {
        setamount(900)
      }
      else if (subscription == '6') {
        setamount(1800)
      }
      else if (subscription == '12') {
        setamount(3600)
      }
    }
    else if (value == '6-18') {
      if (subscription == '1') {
        setamount(700)
      }
      else if (subscription == '2') {
        setamount(1400)
      }
      else if (subscription == '3') {
        setamount(2100)
      }
      else if (subscription == '6') {
        setamount(4200)
      }
      else if (subscription == '12') {
        setamount(8400)
      }
    }
    else if (value == '18-6') {
      if (subscription == '1') {
        setamount(600)
      }
      else if (subscription == '2') {
        setamount(1200)
      }
      else if (subscription == '3') {
        setamount(1800)
      }
      else if (subscription == '6') {
        setamount(3600)
      }
      else if (subscription == '12') {
        setamount(7200)
      }
    }
    else if (value == '6-24') {
      if (subscription == '1') {
        setamount(1200)
      }
      else if (subscription == '2') {
        setamount(2400)
      }
      else if (subscription == '3') {
        setamount(3600)
      }
      else if (subscription == '6') {
        setamount(7200)
      }
      else if (subscription == '12') {
        setamount(14400)
      }
    }
    else if (value == '12-6') {
      if (subscription == '1') {
        setamount(1100)
      }
      else if (subscription == '2') {
        setamount(2200)
      }
      else if (subscription == '3') {
        setamount(3300)
      }
      else if (subscription == '6') {
        setamount(6600)
      }
      else if (subscription == '12') {
        setamount(13200)
      }
    }
    else if (value == '0-24') {
      if (subscription == '1') {
        setamount(1800)
      }
      else if (subscription == '2') {
        setamount(3600)
      }
      else if (subscription == '3') {
        setamount(5400)
      }
      else if (subscription == '6') {
        setamount(10800)
      }
      else if (subscription == '12') {
        setamount(21600)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentmode == '') return toast.error('Plz select vaild Payment mode')
    if (timedurestion == '') return toast.error('Plz select time durestion')
    if (time == '') return toast.error('Plz select time')
    if (subscription == '') return toast.error('Plz select subscription plan')
    if (seat == '') return toast.error('Plz select seat Number')

    if (time == '6-12') {
      if (totalSets[seat]["6:00 - 9:00"] == true || totalSets[seat]["9:00 - 12:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }
    else if (time == '12-18') {
      if (totalSets[seat]["12:00 - 15:00"] == true || totalSets[seat]["15:00 - 18:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }
    else if (time == '18-24') {
      if (totalSets[seat]["18:00 - 21:00"] == true || totalSets[seat]["21:00 - 00:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }
    else if (time == '0-6') {
      if (totalSets[seat]["00:00 - 3:00"] == true || totalSets[seat]["3:00 - 6:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }
    else if (time == '6-18') {
      if (totalSets[seat]["6:00 - 9:00"] == true || totalSets[seat]["9:00 - 12:00"] == true || totalSets[seat]["12:00 - 15:00"] == true || totalSets[seat]["15:00 - 18:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }
    else if (time == '18-6') {
      if (totalSets[seat]["18:00 - 21:00"] == true || totalSets[seat]["21:00 - 00:00"] == true || totalSets[seat]["00:00 - 3:00"] == true || totalSets[seat]["3:00 - 6:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }
    else if (time == '6-24') {
      if (totalSets[seat]["6:00 - 9:00"] == true || totalSets[seat]["9:00 - 12:00"] == true || totalSets[seat]["12:00 - 15:00"] == true || totalSets[seat]["15:00 - 18:00"] == true || totalSets[seat]["18:00 - 21:00"] == true || totalSets[seat]["21:00 - 00:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }
    else if (time == '12-6') {
      if (totalSets[seat]["12:00 - 15:00"] == true || totalSets[seat]["15:00 - 18:00"] == true || totalSets[seat]["18:00 - 21:00"] == true || totalSets[seat]["21:00 - 00:00"] == true || totalSets[seat]["00:00 - 3:00"] == true || totalSets[seat]["3:00 - 6:00"] == true) {
        return toast.error('This seat is not available at this time');
      }
    }

    const alldate = new Date();
    const date = alldate.getDate();
    const month = alldate.getMonth();
    const year = alldate.getFullYear();
    let endyear = year
    let enddate = date - 1;
    let endmonth = month + parseInt(subscription);

    if (enddate == 0) {
      enddate = 30;
      endmonth = endmonth - 1;
    }

    if (endmonth > 12) {
      endyear++;
      endmonth = endmonth - 12;
    }

    let obj = {
      name: name,
      email: email,
      phone: phone,
      paymentmode: paymentmode,
      timedurestion: timedurestion,
      time: time,
      subscription: subscription,
      seatNo: seat,
      amount: amount,
      startDate: {
        startdate: date,
        startmonth: month,
        startyear: year
      },
      endDate: {
        enddate: enddate,
        endmonth: endmonth,
        endyear: endyear
      }
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/students/add`, obj);
      console.log(response);
      
      if (response.data.message == 'Server error 500 not found') {
        return toast.error(response.data.message)
      }
      console.log(response.data.message);
      

      if (response.data.message == 'Student enrolled successfully') {
        console.log("Going");
        const seatobj = {}
        if (time == '6-12') {
          seatobj["6:00 - 9:00"] = true;
          seatobj["9:00 - 12:00"] = true;
        }
        else if (time == '12-18') {
          seatobj["12:00 - 15:00"] = true;
          seatobj["15:00 - 18:00"] = true;
        }
        else if (time == "18-24") {
          seatobj["18:00 - 21:00"] = true;
          seatobj["21:00 - 00:00"] = true;
        }
        else if (time == "0-6") {
          seatobj["00:00 - 3:00"] = true;
          seatobj["3:00 - 6:00"] = true;
        }
        else if (time == "6-18") {
          seatobj["6:00 - 9:00"] = true;
          seatobj["9:00 - 12:00"] = true;
          seatobj["12:00 - 15:00"] = true;
          seatobj["15:00 - 18:00"] = true;
        }
        else if (time == "18-6") {
          seatobj["18:00 - 21:00"] = true;
          seatobj["21:00 - 00:00"] = true;
          seatobj["00:00 - 3:00"] = true;
          seatobj["3:00 - 6:00"] = true;
        }
        else if (time == "6-24") {
          seatobj["6:00 - 9:00"] = true;
          seatobj["9:00 - 12:00"] = true;
          seatobj["12:00 - 15:00"] = true;
          seatobj["15:00 - 18:00"] = true;
          seatobj["18:00 - 21:00"] = true;
          seatobj["21:00 - 00:00"] = true;
        }
        else if (time == "12-6") {
          seatobj["12:00 - 15:00"] = true;
          seatobj["15:00 - 18:00"] = true;
          seatobj["18:00 - 21:00"] = true;
          seatobj["21:00 - 00:00"] = true;
          seatobj["00:00 - 3:00"] = true;
          seatobj["3:00 - 6:00"] = true;
        }
        else if (time == "0-24") {
          seatobj["00:00 - 3:00"] = true;
          seatobj["3:00 - 6:00"] = true;
          seatobj["6:00 - 9:00"] = true;
          seatobj["9:00 - 12:00"] = true;
          seatobj["12:00 - 15:00"] = true;
          seatobj["15:00 - 18:00"] = true;
          seatobj["18:00 - 21:00"] = true;
          seatobj["21:00 - 00:00"] = true;
        }
        try {
          if (Object.keys(seatobj).length === 0) {
            const resdelete = await axios.post(`${import.meta.env.VITE_API_URL}/api/students/delete`, { email: email });
            toast.error('This seat not available at this movement')
            return
          }

          const seatupdateRes = await axios.post(`${import.meta.env.VITE_API_URL}/api/seats/update`, { id: totalSets[seat]._id, seatobj });
          console.log(seatupdateRes.data.message);
          
          if (seatupdateRes.data.message != "Seat updated") {
            await axios.post(`${import.meta.env.VITE_API_URL}/delete`, { email: email });
            return toast.error('This seat not available at this movement')
          }
          const paymentAddResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/income/add`, { name, paymentmode, amount })
          console.log(paymentAddResponse);
          
          toast.success(response.data.message);
          setName('')
          setEmail('')
          setPhone('')
          setpaymentmode('')
          settime('')
          settimedurestion('')
          setsubscription('')
          setSeat('')
          setamount(0)
        } catch (error) {
          toast.error('Server Error')
        }
      }
      else {
        toast.error(`${response.data.message}`)
      }
    } catch (error) {      
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='relative z-1 text-white flex flex-col items-center justify-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col backdrop-blur-[2px] gap-4 bg-[#2c3e5080] px-8 py-10 rounded-lg shadow-xl w-1/2'>
        <h2 className='text-center text-3xl font-bold'>Add New Student</h2>
        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="name">Student Name : </label>
          <input onChange={(e) => setName(e.target.value)} value={name} className='border-b-1 border-gray-500 focus:outline-none p-1' type="text" id='name' required />
        </div>
        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="email">Student Email : </label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border-b-1 border-gray-500 focus:outline-none p-1' type="Email" id='email' required />
        </div>
        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="phone">Student Phone : </label>
          <input onChange={(e) => setPhone(e.target.value)} value={phone} className='border-b-1 border-gray-500 focus:outline-none p-1' type="number" id='phone' required minLength={10} maxLength={10} />
        </div>
        <div className='flex justify-between items-center text-xl '>
          <label>Payment Mode : </label>
          <div className='flex gap-2'>
            <input type="radio" name="paymentType" id="Onlinepayement" value="online" onChange={paymentmodechange} />
            <label htmlFor="Onlinepayement">Online</label>
            <input type="radio" name="paymentType" id="offlinepayement" value="offline" onChange={paymentmodechange} />
            <label htmlFor="offlinepayement">Ofline</label>
          </div>
        </div>
        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="totaltime">Time  durestion : </label>
          <select onChange={changetimeoption} id="totaltime" className='bg-[#2c3e5080]'>
            <option value="">Select time</option>
            <option value="six">6 Hour's</option>
            <option value="twelve">12 Hour's</option>
            <option value="eighteen">18 Hour's</option>
            <option value="twentyfour">24 Hour's</option>
          </select>
        </div>
        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="Subtime">subscription</label>
          <select onChange={subscriptionchange} name="" id="" className='bg-[#2c3e5080]'>
            <option value="">Select any one</option>
            <option value="1">One Month</option>
            <option value="2">Two Month</option>
            <option value="3">Three Month</option>
            <option value="6">Six Month</option>
            <option value="12">One Year</option>
          </select>
        </div>
        <div className='flex justify-between items-center text-xl'>
          <label htmlFor="time">Time : </label>
          <select onChange={changetime} disabled ref={timeDurestionRef} id="time" className='bg-[#2c3e5080]'>
            <option select="true" value="">Select time</option>
            {
              selectedValue.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))
            }
          </select>
        </div>

        <div>
          <div className='flex justify-between items-center text-xl'>
            <label htmlFor="seatnum">Select Seat NO. : </label>
            <select onChange={changeseat} name="" id="setno" className='bg-[#2c3e5080]'>
              <option value="">Select Seat No</option>
              {totalSets.map((item, index) => (
                <option key={index} value={index}>{index + 1}</option>
              ))}
            </select>
          </div>
        </div>
        <input className='border-1 border-gray-500 p-3 rounded-3xl cursor-pointer ' type="submit" value="Add Student" />
      </form>
    </div>
  )
}

export default AddUser