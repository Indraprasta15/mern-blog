import React from 'react';
import { loginbg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
        <div className="left">
            <img src={loginbg} className="bg-image" alt="imageBg"/>
        </div>
        <div className="right">
            <p className="title">Login</p>
            <Gap height={15} />
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password" />
            <Gap height={50} />
            <Button title="Login" 
              onClick={() => navigate("/")} 
            />
            <Gap height={70} />
            <Link title="Belum punya akun, silahkan daftar" 
              onClick={() => navigate("/register")} 
            />
        </div>
    </div>
  )
}

export default Login;