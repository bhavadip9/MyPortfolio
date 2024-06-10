import { Button, Card, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ResponsiveBlogCard({ title, description, imageUrl, link }) {

    return (
        <center>
            <Col md={12} className="mb-4 maincol"  >
                <Card className='h-90'>

                    <Card.Body >
                        <Card.Title className='projecttitle'>{title}</Card.Title>
                        <Card.Text className='projectbody'>{description}</Card.Text>
                    </Card.Body>
                    <Link to={link} className=''>
                        {/* <Card.Img variant="top" className=" img-fluid rounded img-thumbnail table-img" src={imageUrl} /> */}
                        <Button>Read more ... <FaArrowRight className="arrow" /></Button>
                    </Link >
                </Card>
            </Col>

        </center>
    );
}

export default ResponsiveBlogCard;

