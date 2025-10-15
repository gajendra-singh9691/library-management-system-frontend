import { Link } from "react-router-dom"

const DashBoard = () => {
  return (
    <div className="min-w-1/5 h-screen bg-[#2C3E50] text-white flex flex-col items-center">
        <h1 className="text-3xl font-bold border-b-1 border-gray-400 w-full text-center p-6">Dashboard</h1>
        <div className="flex flex-col w-8/9 text-center gap-3 p-4">
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/'>Home</Link>
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/setsavalibity'>Check Sets Avalibity</Link>
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/addstudent'>Add New Student</Link>
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/removestudent'>Remove Student</Link>
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/studentdetail'>Student Details</Link>
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/addexpences'>Add Expences</Link>
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/totalamount'>Total Amount</Link>
            {/* <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/endsubscribsion'>Subscribstion Due</Link> */}
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/changecapcity'>Add More Seats</Link>
            <Link className="border-b-1 border-gray-600 pt-2 pb-0.5 mb-1 text-xl" to='/paymentdetail' >Payment Detials</Link>
        </div>
    </div>
  )
}

export default DashBoard
