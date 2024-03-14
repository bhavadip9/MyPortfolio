//import React from 'react';
import { FiSun } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaTwitterSquare } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";

import '../App.scss';

function Home() {
    const sidebar = () => {

    }





    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">  <img className="mylogo" src="../img/Bhavadip.JPG" alt="" /></Link>
                    <Link className="logo_name" to="/"> <h2>Bhavadip Dhandhlya</h2></Link>
                </div>
                <div className="r-side">

                    <Link className="btn_link" to="/blog"> <a className="btn" href="/blog">Blog</a></Link>
                    <Link className="btn_link" to="/project"> <a className="btn" href="/project">Project</a></Link>
                    {/* <FiSun className="toggle" /> */}
                    <SlMenu className="side-bar" onClick={() => sidebar()} />
                </div>
            </div>
            <div className='animation'>
                <div className="container1">
                    <div className="avatar">
                        <a href="/">
                            <img src="../img/Bhavadip.JPG" alt="Bhavadip" />
                        </a>
                    </div>
                    <div className="content1">
                        <h1>Dhandhlya Bhavadip</h1>
                        <p>Software Engineer, Farmer</p>
                    </div>
                </div>
                <div className="about">
                    <h1>About</h1>
                    <p>I'm a Software Engineer based in Gujrat, India. I have a passion for building performant, scalable and beautiful user interfaces. I have proficiency in technologies like React.js, Node.js. I have B.Tech degree in Computer Engineering from GEC gandhinagar .</p>
                    <div>
                        <button className="btn project1">
                            <Link className="goto_project" to="/project"> Projects</Link>
                            <FaArrowRight className="arrow" /></button>
                    </div>
                </div>


            </div>


            <div className="academy">
                <div className="timeline">
                    <div className="container left">
                        <div className="content">
                            <h3>B.tech</h3>
                            <p>GEC gandhinagar</p>
                            <p>Continue btech in CE </p>
                            <span>Complete in :-2025</span>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <h3>HSC</h3>
                            <p>MK Techno School Talaja</p>
                            <p>10+2 with pysics math and chemistry, got 1677 rank in Gujrat board.</p>
                            <span>2021</span>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                            <h3>SSC</h3>
                            <p>Shree Vivekanand Devali</p>
                            <p>10 with 80% pass</p>
                            <span>2019</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="socialmedia" >
                    <FaLinkedin className="socialmedia_logo" />
                    <a href="https://www.linkedin.com/in/bhavadip-dhandhlya-3a0739229/">Bhavadip</a>
                </div>
                <div className="socialmedia">
                    <FaGithubSquare className="socialmedia_logo" />
                    <a href="https://github.com/bhavadip9">Bhavadip</a>
                </div>
                <div className="socialmedia">
                    <FaInstagramSquare className="socialmedia_logo" />
                    <a href="https://www.instagram.com/bhavadip_pvt/">bhavadip_pvt</a>
                </div>
                <div className="socialmedia">
                    <CgMail className="socialmedia_logo" />
                    <a href="mailto:bhavadip2004@gmial.com">bhavadip2004@gmial.com</a>
                </div>
                <div className="socialmedia">
                    <FaTwitterSquare className="socialmedia_logo" />
                    <a href="https://twitter.com/Bhavadip_9">Bhavadip</a>
                </div>
            </div>
            <div className="footer1">
                Copyright @2024 by Bhavadip
            </div>
        </div>

    )
}

export default Home
