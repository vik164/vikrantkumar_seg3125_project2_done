import { Container, Row, Col, Carousel, Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const VehiclePage6 = () => {
    window.scrollTo(0, 0);
    let checkHistory = useHistory();
    const handleButton = (event) => {
        checkHistory.goBack();
    }
    return ( 
        <div className="vehicle1">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Bugatti Veyron Super Sport </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/b1.jpg")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/b2.jpg")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/b3.jpg")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/b4.jpg")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/b5.jpg")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/b6.jpg")} alt='image6'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/b7.jpg")} alt='image7'></img>
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
                                    <td>Bugatti</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>Veyron 16.4 Super Sport</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>2011</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>Gasoline</td>
                                </tr>
                                <tr>
                                    <td>Cylinders</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>8L</td>
                                </tr>
                                <tr>
                                    <td>Transmission</td>
                                    <td>7-Speed Auto-Clutch Manual</td>
                                </tr>
                                <tr>
                                    <td>Drive Train</td>
                                    <td>All-Wheel Drive</td>
                                </tr>
                                <tr>
                                    <td>Top Speed</td>
                                    <td>400+ km/h</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Body type</td>
                                    <td>Coupe</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Orange and Black</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button size='lg' onClick={(event) => handleButton(event.target.value)} style={{width:'49%', marginBottom:10, marginTop:10, marginRight:2}}> Back </Button>
                        <Button size='lg' style={{width:'49%', marginBottom:10, marginTop:10}} href="/vikrantkumar_seg3125_project2_done#/Reserve"> Reserve Now </Button>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qKWb0dLaxKg" style={{width:'100%', height:'50%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>One can argue that the Buggati Veyron 16.4 was a car that marked the beginning of a new era for supercars, sports cars, and cars in general. Before that car was put into production, the world wouldn't even imagine that a car with a V16 engine would be real and drivable. A world record for a 253 mph top speed later, the world was proven wrong. The Veyron has become just one of those exotic car names that everyone knows.</p>
                        <p style={{color:"white"}}><strong> Rental Price: $1000 per day <br></br>Insurance Cost: $300 per day</strong></p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage6;