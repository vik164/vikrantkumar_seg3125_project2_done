import { Container, Row, Col, Carousel, Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const VehiclePage3 = () => {
    window.scrollTo(0, 0);
    let checkHistory = useHistory();
    const handleButton = (event) => {
        checkHistory.goBack();
    }
    return ( 
        <div className="vehicle1">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Porsche 918 Spyder </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/cc1.jpg")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/cc2.jpg")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/cc3.jpg")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/cc4.jpg")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/cc5.jpg")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/cc6.jpg")} alt='image6'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/cc7.jpg")} alt='image7'></img>
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
                                    <td>Porsche</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>918 Spyder</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>2015</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>Hybrid</td>
                                </tr>
                                <tr>
                                    <td>Cylinders</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>4.6L</td>
                                </tr>
                                <tr>
                                    <td>Transmission</td>
                                    <td>7-Speed PDK</td>
                                </tr>
                                <tr>
                                    <td>Drive Train</td>
                                    <td>Rear-Wheel Drive</td>
                                </tr>
                                <tr>
                                    <td>Top Speed</td>
                                    <td>344 km/h</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>887</td>
                                </tr>
                                <tr>
                                    <td>Body type</td>
                                    <td>Convertible</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Midnight Blue</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button size='lg' onClick={(event) => handleButton(event.target.value)} style={{width:'49%', marginBottom:10, marginTop:10, marginRight:2}}> Back </Button>
                        <Button size='lg' style={{width:'49%', marginBottom:10, marginTop:10}} href="/vikrantkumar_seg3125_project2_done#/Reserve"> Reserve Now </Button>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/B3cZu6lnl8Y" style={{width:'100%', height:'50%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>The hybrid "holy trinity" of hypercars was likely the most important thing to happen in the 2010s for auto enthusiasts. The Porsche 918 Spyder was one of the exotic cars that redefined hard and fast beliefs in the car world, most importantly the one that hybrids were boring. The 918 used it's electric capacity to complement its gas engine and achieve the world's first sub-7-minute lap around the Ring for a street-legal production car.</p>
                        <p style={{color:"white"}}><strong> Rental Price: $700 per day <br></br>Insurance Cost: $250 per day</strong></p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage3;