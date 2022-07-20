import { Carousel, Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (  
        <div className="home">
            <div className="part1">
                <Container fluid style={{marginTop:20, backgroundColor:"#212529", height:"600", width:"50", fontFamily:"serif"}}>
                    <Container xxl>
                        <Carousel>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./Images/car1.png")} alt='image1'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./Images/car2.png")} alt='image2'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={require("./Images/car3.png")} alt='image3'></img>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </Container>
            </div>
            
            <div className="part2">
                <Container fluid style={{marginTop:20, backgroundColor:"#212529", textalign:'center', fontFamily:"serif"}}>
                    <Row>
                        <Col md={true}>
                            <img src={require("./Images/cars1.png")} alt="cars1" style={{margin:10, height: '100%', width:' 100%', objectFit: 'scale-down'}}/>
                        </Col>
                        
                        <Col md={true}>
                            <img src={require("./Images/cars3.png")} alt="cars1" style={{margin:10, height: '100%', width:' 100%', objectFit: 'scale-down'}}/>
                            
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col md={true} className='text-center'>
                            <Button size='lg' href='/vikrantkumar_seg3125_project2/#/Vehicles' style={{width:'80%', itemalign:'center', marginBottom:30}}>Vehicles</Button>
                        </Col>

                        <Col md={true} className='text-center'>
                            <Button size='lg' href='/vikrantkumar_seg3125_project2/#/Reserve' style={{width:'80%', itemalign:'center', marginBottom:30}}>Reserve Now</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="part3">
                <Container fluid style={{marginTop:20, backgroundColor:"#212529", textalign:'center'}}>
                    <Row>
                        <Col md={true}>
                            <img src={require("./Images/sers.jpg")} alt="cars1" style={{marginTop:10, height: '100%', width:' 100%', objectFit: 'scale-down', borderRadius: '20px'}}/>
                        </Col>
                        <Col md={true} style={{textAlign:'center'}}>
                            <h3 style={{color:'white', textAlign:'center', marginTop:100, fontFamily:"serif"}}> Our Services </h3>
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}>Dominari stagna vultus terris descenderat ignea semina hanc regna duae verba eodem discordia perveniunt mortales chaos: porrexerat undae lege mare emicuit moderantum nubes habitabilis exemit origo levius figuras quod sponte terrarum cum egens pressa egens flamma rapidisque sic caeca vix alto coeptis corpora.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2/#/Services' style={{margin:10, fontFamily:"serif"}}>View Services</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={true} style={{textAlign:'center'}}>
                            <h3 style={{color:'white', textAlign:'center', marginTop:100, fontFamily:"serif"}}> Our Vehicles </h3>
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}>Dominari stagna vultus terris descenderat ignea semina hanc regna duae verba eodem discordia perveniunt mortales chaos: porrexerat undae lege mare emicuit moderantum nubes habitabilis exemit origo levius figuras quod sponte terrarum cum egens pressa egens flamma rapidisque sic caeca vix alto coeptis corpora.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2/#/Vehicles' style={{margin:10, fontFamily:"serif"}}>View Vehicles</Button>
                        </Col>
                        <Col md={true}>
                            <img src={require("./Images/vs.png")} alt="cars1" style={{marginTop:45, height: '100%', width:' 100%', objectFit: 'scale-down'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={true}>
                            <img src={require("./Images/contact1.png")} alt="cars1" style={{marginTop:120, marginBottom:-100, marginRight: -80, marginLeft: 85, height: '33%', width:' 33%', objectFit: 'scale-down'}}/>
                            <img src={require("./Images/contact2.png")} alt="cars2" style={{marginTop:120, marginBottom:-100, marginRight: -80, height: '33%', width:' 33%', objectFit: 'scale-down'}}/>
                            <img src={require("./Images/contact3.png")} alt="cars3" style={{marginTop:120, marginBottom:-100, marginRight: -80, height: '33%', width:' 33%', objectFit: 'scale-down'}}/>
                        </Col>
                        <Col md={true} style={{textAlign:'center'}}>
                            <h3 style={{color:'white', textAlign:'center', marginTop:100, fontFamily:"serif"}}> Contact Us </h3>
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}>Dominari stagna vultus terris descenderat ignea semina hanc regna duae verba eodem discordia perveniunt mortales chaos: porrexerat undae lege mare emicuit moderantum nubes habitabilis exemit origo levius figuras quod sponte terrarum cum egens pressa egens flamma rapidisque sic caeca vix alto coeptis corpora.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2/#/Contact' style={{margin:10, fontFamily:"serif"}}>Contact Us</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
 
export default HomePage;