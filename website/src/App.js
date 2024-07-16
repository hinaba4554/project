import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Website/Pages/About';
import Service from './Website/Pages/Service';
import Home from "./Website/Pages/Home"
import Blog1 from "./Website/Pages/Blog1"
import Contact from "./Website/Pages/Contact"
import Login from "./Website/Pages/Login"
import Dashbord from './Admin/Pages/Dashbord';
import Addblog from './Admin/Pages/Addblog';
import Manageblog from './Admin/Pages/Manageblog';
import Addmanageservice from './Admin/Pages/Addmanageservice';
import Manageservice from './Admin/Pages/Manageservice';
import Addcategories from './Admin/Pages/Addcategories';
import Managecategories from './Admin/Pages/Managecategories';
import Managecontac from './Admin/Pages/Managecontac';
import Admin_login from './Admin/Pages/Admin_login';
import Signup from './Website/Pages/Signup';
import { ToastContainer } from 'react-toastify';
import Header2 from './Admin/Component/Header2';
import Aprofile from './Admin/Pages/Aprofile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ToastContainer></ToastContainer>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/header2" element={<Header2 />}></Route>
      {
        <>
       <Route path="/service" element={<Service/>} ></Route>
       <Route path="/Blog1" element={<Blog1/>} ></Route>
       <Route path="/Contact" element={<Contact/>} ></Route>
       <Route path="/login" element={<Login/>} ></Route>
       <Route path="/signup" element={<Signup/>} ></Route>
       
                                                             
       
      </>
      }
    
    {/* Admin */}
   
     <Route path='/Dashbord' element={<Dashbord/>}></Route>
     <Route path='/addservice' element={<Addmanageservice/>}></Route>
     <Route path='/Manageservice' element={<Manageservice/>}></Route>
     <Route path='/Addblog' element={<Addblog/>}></Route>
     <Route path='/manageblog' element={<Manageblog/>}></Route>
     <Route path='/addcategories' element={<Addcategories/>}></Route>
     <Route path='/managecategories' element={<Managecategories/>}></Route>
     <Route path='/managecontac' element={<Managecontac/>}></Route>
     <Route path='/Adminlogin' element={<Admin_login/>}></Route>
     <Route path="/aprofile" element={<Aprofile/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
    
   
  );
}

export default App;
