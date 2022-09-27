import React from 'react';
import { discordbg, emailbg, facebookbg, githubbg, instagrambg, logokabayancodingbg, twitterbg, whatsappbg } from '../../../assets';
import './Footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div>
                <img className="logo" src={logokabayancodingbg} alt="logo" />
            </div>
            <div className="social-wrapper">
                <Icon img={facebookbg} />
                <Icon img={instagrambg} />
                <Icon img={twitterbg} />
                <Icon img={whatsappbg} />
                <Icon img={emailbg} />
                <Icon img={discordbg} />
                <Icon img={githubbg} />
            </div>
        </div>
        <div className="copyright">
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer;