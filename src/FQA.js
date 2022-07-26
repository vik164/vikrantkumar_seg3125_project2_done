import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FQAPage = () => {
    window.scrollTo(0, 0);
    return ( 
        <div className="vehicles">
            <Container fluid className='d-flex align-items-end justify-content-end'>
                <Button variant='dark' href="/vikrantkumar_seg3125_project2_done/#/FQAFr" style={{marginTop:5, marginBottom:-15, marginRight:-5,fontFamily:"serif", width:60, height:40, borderRadius:'50px'}}>FR</Button>
            </Container>
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Frequently Asked Questions </strong></h1>
            <p style={{textAlign:'center'}}>These are some frequently asked questions.</p>
            <Container fluid>
                <hr></hr>
                <Row className='bg-dark' style={{height:180}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> What is Exotic Drives? </Card.Title>
                                <Card.Text>
                                    Exotic Drives is a rental company located in Ottawa, Ontario. We rental only exotic vehicles.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> Can take the vehicle to the US? </Card.Title>
                                <Card.Text>
                                    Unfortunately, no you can not take the vehicle to the US. The vehicle must stay in Ontario. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <hr></hr>
                <Row className='bg-dark' style={{height:180}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> How can I see what vehicles you have? </Card.Title>
                                <Card.Text>
                                    If you look at the navigation bar you will see a vehicles option where you will find our vehicle collection and links to detailed pages about individual cars.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> How can I contact you guys? </Card.Title>
                                <Card.Text>
                                    If you look at the navigation bar you will see a contact us option where you will find all the ways to reach us: by phone, email, in-person visit, or contact form. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='bg-dark' style={{height:200,marginTop:10}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> What the cancellation policy? </Card.Title>
                                <Card.Text>
                                    If you have reserved a vehicle and we send out a confirmation email, you must let us know 48 hours in advance from your booking. If you fail to contact us regarding cancellation you will be charged $250. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                 
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> What if I cannot make it in time for drop-off? </Card.Title>
                                <Card.Text>
                                    If you can not make it to the drop-off location in the designated time slot, you will be charged $50 per hour. However, if you give us a call in advance we can arrange something.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='bg-dark' style={{height:180,marginTop:10}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> How can I reserve a vehicle? </Card.Title>
                                <Card.Text>
                                    For you to reserve one of our exotic cars, click on the reserve button and it will direct you to the page where you have to enter all the information.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                    
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> How does the insurance work? </Card.Title>
                                <Card.Text>
                                    Insurance is a separate cost for each vehicle, which you must pay. Each vehicle has a different insurance price.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='bg-dark' style={{height:160,marginTop:10}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> What is the age requirement to rent a vehicle?  </Card.Title>
                                <Card.Text>
                                    As long as the driver has a valid full drivers license(G), you can rent our vehicles. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> What payment methods are accepted? </Card.Title>
                                <Card.Text>
                                    We take all kind of payment methods, AMEX, cheque, MasterCard, Visa, and E-tranfer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='bg-dark' style={{height:160,marginTop:10}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> How many cars can I rent at once? </Card.Title>
                                <Card.Text>
                                    One customer can rent up to 2 cars at once.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                  
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> I got a ticket, what's going to happen? </Card.Title>
                                <Card.Text>
                                    You will have to pay the ticket and any other costs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
            </Container> 
        </div>
     );
}
 
export default FQAPage;