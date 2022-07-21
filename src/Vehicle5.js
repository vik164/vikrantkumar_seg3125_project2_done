import { Container, Row, Col, Carousel, Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const VehiclePage5 = () => {
    window.scrollTo(0, 0);
    let checkHistory = useHistory();
    const handleButton = (event) => {
        checkHistory.goBack();
    }
    return ( 
        <div className="vehicle1">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Mercedes Benz SLS AMG Black Series </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/w1.webp")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/w2.webp")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/w3.webp")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/w4.webp")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/w5.webp")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/w6.webp")} alt='image6'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/w7.webp")} alt='image7'></img>
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
                                    <td>Mercedes-Benz</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>SLS AMG Black Series</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>2014</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>Petrol</td>
                                </tr>
                                <tr>
                                    <td>Cylinders</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>6.2L</td>
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
                                    <td>315 km/h</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>622</td>
                                </tr>
                                <tr>
                                    <td>Body type</td>
                                    <td>Coupe</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>White</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button size='lg' onClick={(event) => handleButton(event.target.value)} style={{width:'49%', marginBottom:10, marginTop:10, marginRight:2}}> Back </Button>
                        <Button size='lg' style={{width:'49%', marginBottom:10, marginTop:10}} href="/vikrantkumar_seg3125_project2_done#/Reserve"> Reserve Now </Button>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/98G5gAJwuUM" style={{width:'100%', height:'50%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>The 2010 introduction of the SLS AMG was enough to completely rock the word for car enthusiasts: an incredibly performing grand tourer with the 300SL's iconic gullwing doors and the world's most powerful production naturally aspirated engine at the time. In the car's even more incredible Black Series spec, 3.2 seconds to 60 and a 196 mph top speed were on the table.</p>
                        <p style={{color:"white"}}><strong> Rental Price: $750 per day <br></br>Insurance Cost: $200 per day</strong></p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage5;