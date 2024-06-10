import { Row } from "react-bootstrap";
import projects from "../data";
import ResponsiveCard from "./ResponsiveCard";
import Navbar from "../componet/Navbar";
import Footer from "../componet/Footer";



const Project = () => {

    return (
        <div>


            <div className='body1'>
                <Navbar></Navbar>
                <div>
                    <h1 className='name1'>Projects</h1>
                </div>
                <Row className="cardflex">
                    {projects.map(project => (
                        <ResponsiveCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            link={project.link}
                            technologies={project.technologies}
                        />
                    ))}
                </Row>
                <Footer></Footer>
            </div >
        </div>
    )
}

export default Project
