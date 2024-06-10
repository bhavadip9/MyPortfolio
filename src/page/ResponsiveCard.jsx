import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ResponsiveCard({ title, description, imageUrl, technologies, link }) {

    return (
        <center>
            <Col md={12} className="mb-4 maincol"  >
                <Card className='h-90'>
                    <Link to={link} className=''>
                        <Card.Img variant="top" className=" img-fluid rounded img-thumbnail table-img" src={imageUrl} />
                    </Link >
                    <Card.Body >
                        <Card.Title className='projecttitle'>{title}</Card.Title>
                        <Card.Text className='projectbody'>{description}</Card.Text>
                        <Card.Text className='lang'>
                            <strong className='technologies'>{technologies.join(", ")}</strong>
                        </Card.Text>


                    </Card.Body>

                </Card>
            </Col>

        </center>
    );
}

export default ResponsiveCard;

