import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FQAPage = () => {
    // <Col md={3} className='d-flex align-items-end justify-content-end '>
    //                     <Card style={{width: '13rem'}} className='align-items-center'>
    //                         <Card.Body>
    //                             <Card.Title> Exotic Drives FQA </Card.Title>
    //                             <Card.Text>
    //                                 <Button style={{width:165}} variant="outline-secondary">About</Button><br></br>
    //                                 <Button style={{width:165}} variant="outline-secondary">Policies</Button><br></br>
    //                                 <Button style={{width:165}} variant="outline-secondary">Prices</Button><br></br>
    //                                 <Button style={{width:165}} variant="outline-secondary">Reservation</Button>
    //                             </Card.Text>
    //                         </Card.Body>
    //                     </Card>
    //                 </Col>
    window.scrollTo(0, 0);
    return ( 
        <div className="vehicles">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Frequently Questioned Answers </strong></h1>
            <p style={{textAlign:'center'}}>These are some frequently questioned answers.</p>
            <Container fluid>
                <Row>
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
                                <Card.Title> Can I get the vehicle delivered? </Card.Title>
                                <Card.Text>
                                    Yes, you can have the vehicle delivered at no extra cost, however, you must reside in Ottawa, Ontario.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row style={{marginTop:10}}>
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
                                    If you can not make it to the drop-off location in the designated time slot, you will be charged $50 per hour. However, if we delivered the vehicle you do not need to worry about drop-off.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row style={{marginTop:10}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> How can I reserve a vehicle? </Card.Title>
                                <Card.Text>
                                    For you to reserve one of out exotic cars, click on the reserve button and it will direct you to the page where you have to enter all the information.
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
                <Row style={{marginTop:10}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> What is the age to rent a vehicle?  </Card.Title>
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
                <Row style={{marginTop:10}}>
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
                                <Card.Title> I got a ticket, whats going to happen? </Card.Title>
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