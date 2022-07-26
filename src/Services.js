import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ServicesPage = () => {
    window.scrollTo(0, 0);
    return ( 
        <div className="services">
            <Container fluid className='d-flex align-items-end justify-content-end'>
                <Button variant='dark' href="/vikrantkumar_seg3125_project2_done/#/ServicesFr" style={{marginTop:5, marginBottom:-15, marginRight:-5,fontFamily:"serif", width:60, height:40, borderRadius:'50px'}}>FR</Button>
            </Container>
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Our Services </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark' md={true} style={{marginBottom:15, padding:20}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '43rem'}}>
                            <Card.Img src={require("./Images/wed.jpg")} variant='top' style={{width: '42.8rem', height:'28rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Weddings </Card.Title>
                                <Card.Text>
                                    Your wedding is the only thing that matters, bride and groom alike are welcome to explore our excellent array of cars available to amplify your celebration. Ask us about our white or other color collection, as we have a wide selection that is sure to make your day truly special, starting at only $99.00 per day. Reserve your perfect wedding day car today! The vehicle comes decorated with a chauffeur if needed.
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '43rem'}}>
                            <Card.Img src={require("./Images/grad.jpg")} variant='top' style={{width: '42.9rem', height:'28rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Graduation and Prom </Card.Title>
                                <Card.Text>
                                    One of the most important days for our kids is the end of school and the start of adulthood. On this important day, make it unique with a prestigious vehicle from Exotic Drives! Better yet, still, come rent that perfect car and enjoy it for a whole day; yes, we offer that ideal graduation and prom car, starting at only $50 per day! Reserve your perfect graduation and prom car today! The vehicle comes decorated with a chauffeur if needed. 
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} className='bg-dark' style={{marginTop:15, padding:20}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '43rem'}}>
                            <Card.Img src={require("./Images/ads.jpg")} variant='top'></Card.Img>
                            <Card.Body>
                                <Card.Title> Cinema and Advertisements </Card.Title>
                                <Card.Text>
                                    Do you need a vehicle for a film or advertising production? Our exotic vehicles will be perfect, both in front of and behind the camera, to meet the needs of members of the production team.
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '43rem'}}>
                            <Card.Img src={require("./Images/cor.jpg")} variant='top' style={{height: 385}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Corporate </Card.Title>
                                <Card.Text>
                                    Want to make a splash advertising? We can customize our cars to the colours of your company. Do things big and expose yourself!
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default ServicesPage;