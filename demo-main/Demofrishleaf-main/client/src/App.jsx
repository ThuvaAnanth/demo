import './App.css'
import Home from './page/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from './page/Register'
import Login from './page/Login'
import SupplierAccount from './page/SupplierAccount'


import ShipmentAccount from './page/ShipmentAccount'

import MarketingAccout from './page/MarketingAccout'
import MarketingUpdateActivity from './page/SubMarketingPage/AddMarketingUpdate.jsx'
import MarketingAddActivity from './page/SubMarketingPage/AddMarketing.jsx'
import MarketingProfile from './page/SubMarketingPage/MarktingProfilPage.jsx'
import MarketingProfileUpdate from './page/SubMarketingPage/MarketingUpdateProfile.jsx'
import PaymentAddMarketing from './page/SubMarketingPage/PaymentAddMarketing.jsx'
import PaymentUpdateMarketing from './page/SubMarketingPage/PaymentUpdateMarketing.jsx'


// all the staffManager link
import StaffManagerAccount from './page/StaffManagerAccount'
import StaffManagerDteailsUpdate from './page/SubStaffManager/StaffManagerDteailsUpdate.jsx'
import PaymentInforStaffMan from './page/SubStaffManager/PaymentforStaffMan'
import StaffManagerPaymentUpdate from './page/SubStaffManager/StaffManagerPaymentUpdate.jsx'
import AllStaffGet from './page/SubStaffManager/AllStaffGet'
import AllStaffCreate from './page/SubStaffManager/AllStaffCreate.jsx'
import AllStaffUpdatePage from './page/SubStaffManager/AllStaffUpdatePage.jsx'
import Responce from './page/SubStaffManager/Responce'

import StaffAccount from './page/StaffAccount'
import PaymentInforStaff from './page/SubStaffPage/PaymentInforStaff'
import PaymentInforStaffUpdate from './page/SubStaffPage/PaymentUpdateStaff.jsx'
import Request from './page/SubStaffPage/Request'
import StaffUpdate from'./page/SubStaffPage/StaffUpdate.jsx'
import StaffProfileShowInfor from'./page/SubStaffPage/ShowDataStaffInforProfil.jsx'

import UserAccount from './page/UserAccount'
import UserAccountUpdate from './page/SubUserInformation/UserInformationUpdate.jsx'
import UserPayment from './page/SubUserInformation/UserPayment.jsx'
import UserPaymentUpdate from './page/SubUserInformation/UserPaymentUpdate.jsx'
import UserFeedBack from './page/SubUserInformation/userFeedBack.jsx'
import UserProduct from './page/SubUserInformation/UserProduct.jsx'
import UserPromotion from './page/SubUserInformation/UserPromotion.jsx'
import UserFeedBackAdd from './page/SubUserInformation/UserFeedBackAddPage.jsx'
import UserFeedBackUpdate from './page/SubUserInformation/UserFeedBackUpdatePage.jsx'

// inventory part

import ProductShow from './page/ProductShowPage.jsx'
import Contact from './page/Contact'
import About from './page/About'








function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/supplierAccount' element={<SupplierAccount/>}/>
    <Route path='/shipmentAccount' element={<ShipmentAccount/>}/>
    <Route path='/marketingAccount' element={<MarketingAccout/>}/>



    <Route path='/staffManagerAccount' element={<StaffManagerAccount/>}/>
    <Route path='/StaffManagerDteailsUpdate/:id' element={<StaffManagerDteailsUpdate/>}/>
    <Route path='/PaymentInforStaffMan' element={<PaymentInforStaffMan/>}/>
    <Route path='/StaffManagerPaymentUpdate/:id' element={<StaffManagerPaymentUpdate/>}/>
    <Route path='/AllStaffGet' element={<AllStaffGet/>}/>
    <Route path='/AllStaffCreate' element={<AllStaffCreate/>}/>
    <Route path='/AllStaffUpdatePage/:id' element={<AllStaffUpdatePage/>}/>
    <Route path='/Responce' element={<Responce/>}/>



    <Route path='/staffAccount' element={<StaffAccount/>}/>
    <Route path='/PaymentInforStaff' element={<PaymentInforStaff/>}/>
    <Route path='/staffpaymentupdate/:id' element={<PaymentInforStaffUpdate/>}/>
    <Route path='/request' element={<Request/>}/>
    <Route path='/staffupdate/:id' element={<StaffUpdate/>}/>
    <Route path='/StaffProfileShowInfor/' element={<StaffProfileShowInfor/>}/>



    <Route path='/userAccount' element={<UserAccount/>}/>
    <Route path='/userAccountUpdate/:id' element={<UserAccountUpdate/>}/>
    <Route path='/userPayment' element={<UserPayment/>}/>
    <Route path='/userPaymentUpdate/:id' element={<UserPaymentUpdate/>}/>
    <Route path='/UserProduct' element={<UserProduct/>}/>
    <Route path='/UserFeedBack' element={<UserFeedBack/>}/>
    <Route path='/UserFeedBackAdd' element={<UserFeedBackAdd/>}/>
    <Route path='/UserFeedBackUpdate/:id' element={<UserFeedBackUpdate/>}/>

    <Route path='/UserPromotion' element={<UserPromotion/>}/>


    {/* inventory part */}



    <Route path='/mainProducts' element={<ProductShow/>}/> 
 
    <Route path='/MarketingPage' element={<MarketingAccout/>}/>
    <Route path='/MarketingAddActivity' element={<MarketingAddActivity/>}/>
    <Route path='/MarketingUpdateActivity/:id' element={<MarketingUpdateActivity/>}/>
    <Route path='/MarketingProfile' element={<MarketingProfile/>}/>
    <Route path='/MarketingUpdateProfile/:id' element={<MarketingProfileUpdate/>}/>
    <Route path='/paymentAddMarketing' element={<PaymentAddMarketing/>}/>
    <Route path='/PaymentUpdateMarketing/:id' element={<PaymentUpdateMarketing/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
