import { Container, Row, Col, Carousel, Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const VehiclePage1 = () => {
    window.scrollTo(0, 0);
    let checkHistory = useHistory();
    const handleButton = (event) => {
        checkHistory.goBack();
    }
    return ( 
        <div className="vehicle1">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Lamborghini Countach </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/1.jpeg")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/2.jpeg")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/3.jpeg")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/4.jpeg")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/5.jpeg")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/6.jpeg")} alt='image6'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/7.jpeg")} alt='image7'></img>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={true}></Col>
                </Row>

                <Row className='bg-dark justify-content-center' style={{padding:20, paddingBottom:80}}>
                    <Col md={4}>
                        <Table striped variant="dark">
                            <tbody>
                                <tr>
                                    <td>Make</td>
                                    <td>Lamborghini</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>Countach</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>1987</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>Gasoline</td>
                                </tr>
                                <tr>
                                    <td>Cylinders</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>5.2L</td>
                                </tr>
                                <tr>
                                    <td>Transmission</td>
                                    <td>Manual</td>
                                </tr>
                                <tr>
                                    <td>Drive Train</td>
                                    <td>Rear-Wheel Drive</td>
                                </tr>
                                <tr>
                                    <td>Top Speed</td>
                                    <td>300 km/h</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>450</td>
                                </tr>
                                <tr>
                                    <td>Body type</td>
                                    <td>Coupe</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Red</td>
                                </tr>

                            </tbody>
                        </Table>
                        <Button size='lg' onClick={(event) => handleButton(event.target.value)} style={{width:'49%', marginBottom:10, marginTop:10, marginRight:2}}> Back </Button>
                        <Button size='lg' style={{width:'49%', marginBottom:10, marginTop:10}} href="/vikrantkumar_seg3125_project2_done#/Reserve"> Reserve Now </Button>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HfQx-AnXUZc" style={{width:'100%', height:'44%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>One of the most iconic cars from an exotic car brand that everyone knows. This car was by far on more bedroom walls in the 80s than it was in garages because it was just as much a pop culture icon as it was an incredible car. It had an incredible 26-year lifespan, which was thanks to the fact that the Countach was a car that kept up with everything around it. By the time it was discontinued, it still clocked in incredible numbers among its much younger peers with a 185 mph top speed and 4.7 seconds from a standstill to 60 mph. </p>
                        <p style={{color:"white"}}><strong> Rental Price: $800 per day <br></br>Insurance Cost: $150 per day</strong></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage1;