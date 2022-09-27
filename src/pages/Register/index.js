import React from 'react';
import { registerbg } from '../../assets';
import { Button, Input, Gap, Link} from '../../components';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
        <div className="left">
            <img src={registerbg} className="bg-image" alt="imageBg"/>
        </div>
        <div className="right">
            <p className="title">Form Register</p>
            <Gap height={15} />
            <Input label="Full Name" placeholder="Full Name" />
            <Gap height={18} />
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password" />
            <Gap height={50} />
            <Button title="Register" 
              onClick={() => navigate("/login")} 
            />
            <Gap height={70} />
            <Link title="Kembali ke Login" 
              onClick={() => navigate("/login")}
            />
        </div>
    </div>
  )
}

export default Register;