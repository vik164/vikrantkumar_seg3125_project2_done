import { Container, Row, Col, Carousel, Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const VehiclePage2 = () => {
    window.scrollTo(0, 0);
    let checkHistory = useHistory();
    const handleButton = (event) => {
        checkHistory.goBack();
    }
    return ( 
        <div className="vehicle1">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Ferrari F40 </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/c1.jpg")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/c2.jpg")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/c3.jpg")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/c4.jpg")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/c5.jpg")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/c6.jpg")} alt='image6'></img>
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
                                    <td>Ferrari</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>F40</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>1992</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>Gasoline</td>
                                </tr>
                                <tr>
                                    <td>Cylinders</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>2.9L</td>
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
                                    <td>321 km/h</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>478</td>
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
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fTaP6YzESbk" style={{width:'100%', height:'50%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>Being the last car that the legendary Enzo Ferrari would ever oversee the development of, the Ferrari F40 couldn't disappoint. And with 4.2 seconds to 60 miles per hour, a 197 mph top speed, and the ultimate street-legal race car experience for its time, the Ferrari F40 went on to be one of the most desirable Ferraris to ever exist and one of the best supercars of all time.</p>
                        <p style={{color:"white"}}><strong> Rental Price: $750 per day <br></br>Insurance Cost: $200 per day</strong></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage2;