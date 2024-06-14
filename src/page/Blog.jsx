
import Navbar from '../componet/Navbar'
import { Row } from 'react-bootstrap'
import ResponsiveBlogCard from './ResponsiveBlogCard'
import blogs from '../blogdata'
import Footer from '../componet/Footer'

const Blog = () => {
    return (
        <div >
            <div className='blogbody'>
                <Navbar></Navbar>
                <div>
                    <h1 className='name1'>Blogs</h1>
                </div>
                <Row className="cardflex">
                    {blogs.map(blog => (
                        <ResponsiveBlogCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            imageUrl={blog.imageUrl}
                            link={blog.link}

                        />
                    ))}
                </Row>
                <Footer></Footer>
            </div >
        </div>
    )
}

export default Blog
