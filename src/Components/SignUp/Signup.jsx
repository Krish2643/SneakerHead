import React, { useState } from 'react'
import './Signup.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from '../SignIn/Login/Login'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Firebase';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Signup = () => {
    
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [showLoader, setShowLoader] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })

    const handleChange = (event)=>{
          const {name, value} = event.target;
           setFormData((prevData)=>({
            ...prevData,
            [name] : value
           }))
    }

    const signup = (e)=>{
        e.preventDefault();
        setShowLoader(true);
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setShowLoader(false);
            localStorage.setItem('isLogin', true);
            navigate('/men', {replace: true});
            setFormData({
               email: '',
               password: '',
               confirmpassword: ''
               })
         })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;  
         });

         console.log(formData.email, formData.password);

      }
        
  return (
    <section className="signup-container signup-forms">
            <div className="signup-form login">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showLoader}
               >        
                <CircularProgress color="inherit" />
            </Backdrop>
                <div className="signup-form-content">
                    <header className='signup-header'>Signup</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" name="email" className="input" onChange={handleChange} value={formData.email} />
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Password" name="password" className="password" onChange={handleChange} value={formData.password} />
                            <i className='bx bx-hide eye-icon'></i>
                        </div>
                        <div className="field input-field">
                            <input type="password" placeholder="Confirm Password" name="confirmpassword"  className="password" onChange={handleChange} value={formData.confirmpassword} />
                            <i className='bx bx-hide eye-icon'></i>
                        </div>
                        <div className="field button-field">
                            <button onClick={signup} >Signup</button>
                        </div>
                    
                    </form>
                    <div class="form-link">
                        <span>Already have an account? <NavLink to="/signin" className="link signup-link">Login</NavLink></span>
                    </div>
                </div>
                <div className="line"></div>
                <Login />
            </div>

        </section>
  )
}

export default Signup