import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
         <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'><FaFacebookF /></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div class="media-options">
                    <a href="#" class="field google">    
                    <FcGoogle className='google-img' />
                        <span >Login with Google</span>
                    </a>
                </div>
    </div>
  )
}

export default Login