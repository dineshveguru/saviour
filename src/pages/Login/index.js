import React, { useEffect } from 'react'
import '../../styles/loginPage.css'
import GoogleButton from 'react-google-button'

import { UserAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
      

    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    if(user != null){
      navigate('/');
    }
  }, [user, navigate]);


  return (
    <>

        <h3 className='loginPageHead'>Login Page</h3>
        <div className='googleLoginBtn'>
        <GoogleButton  onClick={handleGoogleSignIn}  />
        </div>


    </>
  )
}

export default Login;