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
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Cadillac Escalade Limousine </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark justify-content-center' style={{padding:20}}>
                    <Col md={true}></Col>
                    <Col md={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/lim2.jpg")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/lim1.jpeg")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/lim3.jpg")} alt='image3'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/lim4.jpg")} alt='image4'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/lim5.jpeg")} alt='image5'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/lim6.jpeg")} alt='image6'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./CarImages/lim7.jpeg")} alt='image7'></img>
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
                                    <td>Cadillac</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>Escalade Limousine</td>
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
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>6.28L</td>
                                </tr>
                                <tr>
                                    <td>Transmission</td>
                                    <td>Automatic</td>
                                </tr>
                                <tr>
                                    <td>Drive Train</td>
                                    <td>Rear-Wheel Drive</td>
                                </tr>
                                <tr>
                                    <td>Top Speed</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>Body type</td>
                                    <td>Stretch SUV</td>
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
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/eTqAWrQ9gZ4" style={{width:'100%', height:'50%', paddingBottom: 10}}></iframe>
                        <p style={{color:"white"}}>There's no such thing as too much of a good thing.  It always leaves you wanting more.  And our 20-passenger Cadillac Escalade stretch SUV limo is no exception.The high-output premium audio/video entertainment system, LED ceiling and floor lighting and laser and strobe effects will have you rockin down the road.  And the RGB ground effects lighting and jet door will help ensure you make a grand entrance.</p>
                        <p style={{color:"white"}}><strong> Rental Price: $350 per day <br></br>Insurance Cost: $100 per day</strong></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default VehiclePage3;