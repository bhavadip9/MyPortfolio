import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";


const Project = () => {
    return (
        <div className='body1'>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">  <img className="mylogo" src="../img/Bhavadip.JPG" alt="" /></Link>
                    <Link className="logo_name" to="/"> <h2>Bhavadip Dhandhlya</h2></Link>
                </div>
                <div className="r-side">
                    <Link className="btn_link" to="/blog"> <a className="btn" href="/blog">Blog</a></Link>
                    <Link className="btn_link" to="/project"> <a className="btn" href="/project">Project</a></Link>
                    <FiSun className="toggle" />
                </div>

            </div>
            <div>
                <h1 className='name1'>Projects</h1>
            </div>

            <div className='project_start'>
                <div className='table-1'>
                    <img src="../img/voicetotext.png" alt="Voicetotext" />
                    <div className='table-footer'>
                        <h2> Voice to text converter</h2>
                        <p>This is my project for voice to text converter</p>

                        <div className="lang">
                            <p>React Js</p>
                            <p>Css</p>
                        </div>
                    </div>
                </div>
                <div className='table-1'>
                    <img src="../img/BookStore.png" alt="Protolio" />
                    <div className='table-footer'>
                        <h2> Book Store Website</h2>
                        <p>In this Website you publish your book and Any time Update and Delete your Self .</p>

                        <div className="lang">
                            <p>React Js</p>
                            <p>Node Js</p>
                            <p>Tailwin Css</p>
                        </div>
                    </div>
                </div>
                <div className='table-1'>
                    <img src="../img/protfolio.png" alt="Protolio" />
                    <div className='table-footer'>
                        <h2> Protflio Website</h2>
                        <p>This my protflio website where I store all my project and my knowledge. </p>

                        <div className="lang">
                            <p>React Js</p>
                            <p>Node Js</p>
                            <p>Css</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
