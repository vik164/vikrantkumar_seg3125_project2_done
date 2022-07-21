import {Container, Row, Col, Button, Form, FloatingLabel, Alert, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const SurveyPage = () => {
    const handleSubmit3 = (event) => {
        document.getElementById('col1').style.display = "none";
        document.getElementById("row1").style.display = "none";
        document.getElementById('row2').style.display = "none";
        document.getElementById('row3').style.display = "none";
        document.getElementById('row4').style.display = "none";
        document.getElementById("comment1").style.display = "none";
        document.getElementById('subButton').style.display = "none";
        document.getElementById('successMessage').style.display = "block";
        window.scrollTo(0,0); 
        
    }
    window.scrollTo(0,0); 
    return ( 
        
        <div className="survey">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Feedback Survey </strong></h1>
            <Container fluid style={{fontFamily:"serif"}}>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Alert id="successMessage" variant='success' style={{display:'none', width: '100%', textAlign: 'center', marginBottom:-70, 
                    marginTop:20}}>
                        <Alert.Heading>Response Successfully Submitted</Alert.Heading>
                        <h5 style={{marginTop:10}}>Thank you for completing the feedback survey.</h5>
                        <img src={require("./Images/v4.jpg")} style={{width: '45%'}} alt='help'></img><br></br>
                        
                        <Button size='lg' style={{width:'23%', marginTop:10}} href="/vikrantkumar_seg3125_project2_done/#/Home"> Back to home </Button>
                    </Alert>

                    <Col className='d-flex align-items-center justify-content-center' style={{display:'block'}}>
                        <Card style={{width: '40rem'}} id="col1">
                            <Card.Body>
                                <Card.Title> 1. Is this the first time you used this site? </Card.Title>
                                <Form.Check type='radio' name='option1' label='Yes'></Form.Check>
                                <Form.Check type='radio' name='option1' label='No'></Form.Check>
                            </Card.Body>
                        </Card>
                    </Col>                  
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20, display:'block'}}>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}} id="row1">
                            <Card.Body>
                                <Card.Title> 2. How satisfied were you with your experience? </Card.Title>
                                <Form.Check type='radio' name='option2' label='Very Satisfied'></Form.Check>
                                <Form.Check type='radio' name='option2' label='Satisfied'></Form.Check>
                                <Form.Check type='radio' name='option2' label='Moderately Satisfied'></Form.Check>
                                <Form.Check type='radio' name='option2' label='Not Satisfied'></Form.Check>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}} >
                    <Col className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}} id="row2">
                            <Card.Body>
                                <Card.Title> 3. Tell us if it was easy finding information on the site? </Card.Title>
                                <Form.Check type='radio' name='option3' label='It was very Easy'></Form.Check>
                                <Form.Check type='radio' name='option3' label='It was easy'></Form.Check>
                                <Form.Check type='radio' name='option3' label='It was okay'></Form.Check>
                                <Form.Check type='radio' name='option3' label='It was not Easy'></Form.Check>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20, marginBottom:-10}}>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}} id="row3">
                            <Card.Body>
                                <Card.Title> 4. Tell us how was the navigation on the reservation process? </Card.Title>
                                <Form.Check type='radio' name='option4' label='It was very good'></Form.Check>
                                <Form.Check type='radio' name='option4' label='It was Good'></Form.Check>
                                <Form.Check type='radio' name='option4' label='It was Okay'></Form.Check>
                                <Form.Check type='radio' name='option4' label='It was Bad'></Form.Check>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20, marginBottom:-10}} >
                    <Col className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}} id="row4">
                            <Card.Body>
                                <Card.Title> 5. Did you find what you were looking for? </Card.Title>
                                <Form.Check type='radio' name='option5' label='Yes'></Form.Check>
                                <Form.Check type='radio' name='option5' label='No'></Form.Check>
                                <Form.Check type='radio' name='option5' label='I was just browsing'></Form.Check>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20, marginBottom:-10}}>
                    <Col className="d-flex justify-content-center"> 
                        <FloatingLabel id="comment1">Any additional feedback?
                                <Form.Control id="comment" type="comment" style={{height:150, width:640}}/>
                        </FloatingLabel>
                    </Col>                   
                </Row>            
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
                    <Col md={4}>
                        <Button id="subButton" size='lg' style={{width:'100%'}} onClick={(event) => handleSubmit3(event.target.value)}> Submit </Button>
                    </Col>
                </Row>
            </Container> 
        </div>
     );
}
 
export default SurveyPage;