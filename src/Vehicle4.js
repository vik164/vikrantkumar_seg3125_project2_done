import { Container, Row, Col, Carousel, Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const VehiclePage4 = () => {
    window.scrollTo(0, 0);
    let checkHistory = useHistory();
    const handleButton = (event) => {
        checkHistory.goBack();
    }
    return ( 
        <div className="vehicle1">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Porsche Carrera GT </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/v1.jpg")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/v2.jpg")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/v3.jpg")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/v4.jpg")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/v5.jpg")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/v6.jpg")} alt='image6'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/v7.jpg")} alt='image7'></img>
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
                                    <td>Carrera GT</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>2005</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>Gasoline</td>
                                </tr>
                                <tr>
                                    <td>Cylinders</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>5.7L</td>
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
                                    <td>330 km/h</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>605</td>
                                </tr>
                                <tr>
                                    <td>Body type</td>
                                    <td>Convertible</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Black</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button size='lg' onClick={(event) => handleButton(event.target.value)} style={{width:'49%', marginBottom:10, marginTop:10, marginRight:2}}> Back </Button>
                        <Button size='lg' style={{width:'49%', marginBottom:10, marginTop:10}} href="/vikrantkumar_seg3125_project2_done#/Reserve"> Reserve Now </Button>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VKjfkZzp9EM" style={{width:'100%', height:'50%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>Any childhood 'Need for Speed' fans who grew up with iconic titles like 'Carbon' and 'Most Wanted' know that there isn't a car quite like the Porsche Carrera GT. Its incredible looks have stood the test of time, and its sub-4-second 0-60 stat ensures that the Carrera GT doesn't waste any. The Carrera GT is, beyond a doubt, a pure icon in Porsche history. This supercar list wouldn't be complete without the Carrera GT.</p>
                        <p style={{color:"white"}}><strong> Rental Price: $450 per day <br></br>Insurance Cost: $150 per day</strong></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage4;