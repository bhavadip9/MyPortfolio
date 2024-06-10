import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { SlMenu } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false); // State to track whether the navigation is active

    function navHandler() {
        setIsActive(!isActive); // Toggles the state of isActive
    }
    return (

        <div className="navbar">
            <div className="logo">
                <Link to="/">  <img className="mylogo" src="../img/Bhavadip.JPG" alt="" /></Link>
                <Link className="logo_name" to="/"> <h2>Bhavadip Dhandhlya</h2></Link>
            </div>
            <div className="r-side"  >
                <div className="no_space1" >
                    <Link className="btn_link1" to="/blog"> <a className="btn" href="/blog">Blog</a></Link>
                    <Link className="btn_link1" to="/project"> <a className="btn" href="/project">Project</a></Link>
                </div>

                {isActive ? (
                    <RxCross2 className="side-bar" onClick={navHandler} />
                ) : (
                    <SlMenu className="side-bar" onClick={navHandler} />
                )}


                {isActive && (
                    <div className="no_space" >
                        <Link className="btn_link" to="/blog"> <a className="btn" href="/blog">Blog</a></Link>
                        <Link className="btn_link" to="/project"> <a className="btn " href="/project">Project</a></Link>
                    </div>
                )}

            </div>


        </div>

    )
}

export default Navbar
