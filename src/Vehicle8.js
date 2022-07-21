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
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Lamborghini Veneno Roadster </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/o1.jpg")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/o2.jpg")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/o3.jpg")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/o4.jpg")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/o5.jpg")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/o6.jpg")} alt='image6'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/o7.jpg")} alt='image7'></img>
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
                                    <td>Veneno Roadster</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>2015</td>
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
                                    <td>6.5L</td>
                                </tr>
                                <tr>
                                    <td>Transmission</td>
                                    <td>Manual Robotic</td>
                                </tr>
                                <tr>
                                    <td>Drive Train</td>
                                    <td>All-Wheel Drive</td>
                                </tr>
                                <tr>
                                    <td>Top Speed</td>
                                    <td>355 km/h</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>739</td>
                                </tr>
                                <tr>
                                    <td>Body type</td>
                                    <td>Convertible</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Black and Green</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button size='lg' onClick={(event) => handleButton(event.target.value)} style={{width:'49%', marginBottom:10, marginTop:10, marginRight:2}}> Back </Button>
                        <Button size='lg' style={{width:'49%', marginBottom:10, marginTop:10}} href="/vikrantkumar_seg3125_project2_done#/Reserve"> Reserve Now </Button>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/O2dgfvXVZ48" style={{width:'100%', height:'50%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>1.41 lateral Gs is what the Lamborghini Veneno can produce in a corner, meaning you can be pushed to the side at a force equal to 1.4 times the amount of gravity while cornering in a Lamborghini Veneno, without breaking traction. That statistic only scratches the surface of what makes this extremely unique and rare Lamborghini so special.</p>
                        <br></br>
                        <p style={{color:"white"}}><strong> Rental Price: $800 per day <br></br>Insurance Cost: $150 per day</strong></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage3;