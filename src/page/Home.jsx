import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.scss';
import Navbar from "../componet/Navbar";
import Footer from "../componet/Footer";


function Home() {

    function handleDownload() {

        const link = document.createElement('a');

        link.href = `https://drive.google.com/file/d/1SCQadFzyWLltXHLEYupAEjLibgkegMFK/view?usp=sharing`;


        link.download = 'Bhavadip.pdf'; // The name of the file to be downloaded
        link.click();
    }





    return (
        <div>

            <div style={{ backgroundColor: "#829bbb" }}>
                <Navbar></Navbar>

                <div className='animation'>
                    <div className="container1">
                        <div className="avatar">
                            <Link href="/">
                                <img src="../img/Bhavadip.JPG" alt="Bhavadip" />
                            </Link>
                        </div>
                        <div className="content1">
                            <h1>Dhandhlya Bhavadip</h1>
                            <p>Software Engineer, Farmer</p>
                        </div>
                    </div>
                    <div className="about">
                        <h1>About</h1>
                        <p>I'm a Software Engineer based in Gujarat, India. I have a passion for building performant, scalable and beautiful user interfaces. I have proficiency in technologies like React.js, Node.js. I have B.Tech degree in Computer Engineering from GEC gandhinagar .</p>
                        {/* <Button className="">Resume</Button> */}


                        <div>
                            <button className="btn project1">
                                <div className="goto_project" onClick={handleDownload}> Resume</div>
                            </button>

                            <button className="btn project1">
                                <Link className="goto_project" to="/project"> Projects</Link>
                                <FaArrowRight className="arrow" /></button>
                        </div>
                    </div>


                </div>
                <div>
                    <div className="about skillclass" >
                        <h1>Skill</h1>
                        <div className="lang skills">
                            <p className='technologies skillstyle'>HTML</p>
                            <p className='technologies skillstyle'>CSS</p>
                            <p className='technologies skillstyle'>JAVASCRIPT</p>
                            <p className='technologies skillstyle'>REACT JS</p>
                            <p className='technologies skillstyle'>NODE JS</p>
                            <p className='technologies skillstyle'>MONGOOSE</p>
                            <p className='technologies skillstyle'>JAVA</p>

                        </div>
                    </div>
                </div>



                <div className="academy">
                    <div >
                        <h1 className=" about skillclass skillclass1">Education</h1>
                    </div>
                    <div className="acsdemygraph">
                        <div className="timeline">
                            <div className="container left">
                                <div className="content">
                                    <h3>B.Tech</h3>
                                    <p>GEC Gandhinagar</p>
                                    <p>Continue btech in CE </p>
                                    <span>Complete in :-2025</span>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="content">
                                    <h3>HSC</h3>
                                    <p>MK Techno School Talaja</p>
                                    <p>10+2 with physics maths and chemistry, got 1677 rank in Gujarat board.</p>
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
                </div>

                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home
