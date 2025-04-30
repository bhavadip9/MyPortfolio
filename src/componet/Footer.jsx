
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="socialmedia" >
                    <Link href="https://www.linkedin.com/in/bhavadip-dhandhlya-3a0739229/"> <FaLinkedin className="socialmedia_logo" /></Link>
                </div>
                <div className="socialmedia">
                    <Link href="https://github.com/bhavadip9"><FaGithubSquare className="socialmedia_logo" /></Link>
                </div>
                <div className="socialmedia">
                    <Link href="https://www.instagram.com/bhavadip_pvt/"><FaInstagramSquare className="socialmedia_logo" /></Link>
                </div>
                <div className="socialmedia">
                    <Link href="mailto:bhavadip2004@gmial.com"><CgMail className="socialmedia_logo" /></Link>
                </div>
                <div className="socialmedia">
                    <Link href="https://twitter.com/Bhavadip_9"><FaTwitterSquare className="socialmedia_logo" /></Link>
                </div>
            </div>
            <div className="footer1">
                Copyright @2024 by Bhavadip
            </div>
        </div>
    )
}

export default Footer;
