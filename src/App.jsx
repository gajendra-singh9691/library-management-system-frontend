import './App.css'
import AddUser from './Components/AddUser'
import DashBoard from './Components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import RemoveStundet from './Components/RemoveStundet'
import { Toaster } from 'react-hot-toast'
import SetsAvilable from './Components/SetsAvilable'
import AddExpences from './Components/AddExpences'
import ChangeCapcity from './Components/ChangeCapcity'
import TotalAmount from './Components/TotalAmount'
import StudentDetail from './Components/StudentDetail'
import PaymentDetail from './Components/PaymentDetail'

function App() {

  return (
    <div className="flex h-screen bg-[#ECF0F1] overflow-hidden">
      <BrowserRouter>
        <DashBoard />
        <div style={{backgroundImage : 'url(../library.png)'}} className='bg-cover bg-center w-4/5 h-screen'>
          <div  className='w-4/5 h-full absolute bg-[#0000006b] right-0'></div>
          <Routes>
            <Route path="/" element={<MainPage />} /> {/* comp */}
            <Route path="/addstudent" element={<AddUser />} /> 
            <Route path="/removestudent" element={<RemoveStundet />} /> {/* comp */}
            <Route path="/setsavalibity" element={<SetsAvilable />} /> {/* comp */}
            {/* <Route path="/endsubscribsion" element={<SubscrisionDue />} /> */}
            <Route path="/addexpences" element={<AddExpences />} /> {/* comp */}
            <Route path="/changecapcity" element={<ChangeCapcity />} /> {/* comp */}
            <Route path="/totalamount" element={<TotalAmount />} /> {/* comp */}
            <Route path='/studentdetail' element={<StudentDetail />} /> {/* comp */}
            <Route path='/paymentdetail' element={<PaymentDetail />} /> {/* comp */}
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster reverseOrder={false} />
    </div>
  )
}

export default App
