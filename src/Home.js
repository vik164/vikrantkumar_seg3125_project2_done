import { Carousel, Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (  
        <div className="home">
            <Container fluid className='d-flex align-items-end justify-content-end'>
                <Button variant='dark' href="/vikrantkumar_seg3125_project2_done/#/HomeFr" style={{marginTop:5, marginBottom:-15, marginRight:-5,fontFamily:"serif", width:60, height:40, borderRadius:'50px'}}>FR</Button>
            </Container>
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
                            <Button size='lg' href='/vikrantkumar_seg3125_project2_done/#/Vehicles' style={{width:'80%', itemalign:'center', marginBottom:30}}>Vehicles</Button>
                        </Col>

                        <Col md={true} className='text-center'>
                            <Button size='lg' href='/vikrantkumar_seg3125_project2_done/#/Reserve' style={{width:'80%', itemalign:'center', marginBottom:30}}>Reserve Now</Button>
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
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}> Exotic Drives has many for your important occasions. The services are weddings, graduation and prom, cinema and advertisements, and corporate. Our services are top of the line. To check out our services click on the button below.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2_done/#/Services' style={{margin:10, fontFamily:"serif"}}>View Services</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={true} style={{textAlign:'center'}}>
                            <h3 style={{color:'white', textAlign:'center', marginTop:100, fontFamily:"serif"}}> Our Vehicles </h3>
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}>Exotic Drives has numerous vehicles for any occasions. Our cars are vintage, rare, fast and fun which you will not find anywhere. Come on down to our ottawa locations to check it out. To check out our cars and collection online, click on the button below.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2_done/#/Vehicles' style={{margin:10, fontFamily:"serif"}}>View Vehicles</Button>
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
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}>Exotic drives offer so much that you may feel overwhelmed in which you can contact on by phone, email or an in person visit and we will be happy to help. To check out our how you can reach us, click on the button below.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2_done/#/Contact' style={{margin:10, marginBottom:25,fontFamily:"serif"}}>Contact Us</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
 
export default HomePage;