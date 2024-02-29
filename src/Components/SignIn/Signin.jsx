import React, { useContext, useEffect, useState } from 'react'
import './Signin.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from './Login/Login'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Firebase';
import { LoginContext } from '../../App';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Signin = () => {

     const navigate = useNavigate();
     const auth = getAuth(app);
     const {logIn} = useContext(LoginContext);
     const [showLoader, setShowLoader] = useState(false);
     const [formData, setFormData] = useState({
       email: "",
       password: "",
       })
      
    const handleChange = (event)=>{
      const {name, value} = event.target;
       setFormData((prevData)=>({
        ...prevData,
        [name] : value
       }))      
       }

     const signin = (e)=>{
           e.preventDefault();
           setShowLoader(true);
           signInWithEmailAndPassword(auth, formData.email, formData.password)
           .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         setShowLoader(false);
         console.log("successful login...");
         setFormData({
           email: '',
           password: '',
           confirmpassword: ''
           })
     
          localStorage.setItem('isLogin', true);
          navigate('/', {replace: true});
          window.location.reload(false);
        
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(error);
       });
    }

   return (
    <section class="signup-container signup-forms">
            <div class="signup-form login">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showLoader}
               >        
                <CircularProgress color="inherit" />
            </Backdrop>
                <div class="signup-form-content">
                    <header className='signup-header'>Login</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" name="email" class="input" onChange={handleChange} value={formData.email} />
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Password" name="password" class="password" onChange={handleChange} value={formData.password} />
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="field button-field">
                            <button onClick={signin} >Login</button>
                        </div>
                    </form>
                    <div class="form-link">
                        <span>Don't have an account? <NavLink to="/signup" class="link signup-link">Signup</NavLink></span>
                    </div>
                </div>
                <div class="line"></div>
                <Login /> 
            </div>

        </section>
  )
}

export default Signin