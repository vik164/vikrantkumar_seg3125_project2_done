import {Container, Row, Col, Button, Form, FloatingLabel, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const ContactPage = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit3 = (event) => {
        if(fname != '' && lname != '' && phoneNum != '' && email != ''){
            document.getElementById('successMessage').style.display = "block";
            document.getElementById('fname1').style.display = "none";
            document.getElementById('lname1').style.display = "none";
            document.getElementById('phoneNumber1').style.display = "none";
            document.getElementById('emails1').style.display = "none";
            document.getElementById('comment1').style.display = "none";
            document.getElementById('subButton').style.display = "none";
            document.getElementById('selOptions').style.display = "none";
        }
        else{
            document.getElementById('emails').style.borderColor = "red";
            document.getElementById('phoneNumber').style.borderColor = "red";
            document.getElementById('lname').style.borderColor = "red";
            document.getElementById('fname').style.borderColor = "red";
        }
    }

    const handleSubmit2 = (event) => {
        setEmail(event);
        let checkAt = false;
        let checkEnd = false;
        let checkC = false;
        if(event == false){
            return event;
        }
        for(let i in event){
            document.getElementById('emails').style.borderColor = "red";
            document.getElementById('subButton').disabled = true;
            if(event[i] == '@'){
                checkAt = true;
            }

            if(event[i] == '.'){
                checkEnd = true;
                let word = event.split('.');
                if(word[word.length-1] == "com" || word[word.length-1] == "ca"){
                    checkC = true;
                }
            }
        }
        if(checkAt == true && checkEnd == true && checkC == true){
            document.getElementById('emails').style.borderColor = "lightgrey";
            document.getElementById('subButton').disabled = false;
        }
    }

    const handleSubmit = (event) => {
        setPhoneNum(event);
        let checker = false;
        let checker2 = false;
        if(event == false){
            return event;
        }
        for(let i in event){
            console.log(event[i]);
            console.log(isNaN(event[i]));

            if(isNaN(event[i]) === true){
                document.getElementById('phoneNumber').style.borderColor = "red";
                document.getElementById('subButton').disabled = true;
                checker = true;
            }

            if(event.length == 10){
                checker2 = false;
            }
            else{
                document.getElementById('phoneNumber').style.borderColor = "red";
                document.getElementById('subButton').disabled = true;
                checker2 = true;
            }

        }
        if(checker == false && checker2 == false){
            document.getElementById('phoneNumber').style.borderColor = "lightgrey";
            document.getElementById('subButton').disabled = false;
        }
    }

    const handleFname = (event) => {
        setFname(event);
        if(fname != ''){
            document.getElementById('fname').style.borderColor = "lightgrey";
        }
    }
    const handleLname = (event) => {
        setLname(event);
        if(lname != ''){
            document.getElementById('lname').style.borderColor = "lightgrey";
        }
    }

    window.scrollTo(0, 0);
    return ( 
        <div className="contact">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Contact Us </strong></h1>

            <Container fluid style={{fontFamily:"serif"}}>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Alert id="successMessage" variant='success' style={{display:'none', width: '75%', textAlign: 'center', marginBottom:-60}}>
                        <Alert.Heading>Response Successfully Submitted</Alert.Heading>
                        <p>Thank you for reaching out! We will get back to you shortly.</p>
                    </Alert>

                    <Col md={4}>
                            <FloatingLabel label="First Name*" id="fname1">
                                <Form.Control id="fname" size="lg" type="fname" value={fname} onChange={(event) => handleFname(event.target.value)}/>
                            </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <Form>
                            <FloatingLabel label="Last Name*" id="lname1">
                                <Form.Control id="lname" size="lg" type="lname" value={lname} onChange={(event) => handleLname(event.target.value)}/>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
                    <Col md={4}>
                        <Form>
                            <FloatingLabel label="Phone Number*" id="phoneNumber1">
                                <Form.Control id="phoneNumber" size="lg" type="phoneNum" value={phoneNum} maxLength={10} onChange={(event) => handleSubmit(event.target.value)}/>
                                <a><strong>FORMAT: ##########</strong></a>
                            </FloatingLabel>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <Form>
                            <FloatingLabel label="How did you hear about us?" id="selOptions">
                                <Form.Select type="selOptions">
                                    <option value="0" selected disabled>Select One</option>
                                    <option value="1">Internet</option>
                                    <option value="2">Newspaper</option>
                                    <option value="3">Friend</option>
                                    <option value="4">Other</option>
                                </Form.Select>
                                <p style={{marginTop:24}}></p>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
                    <Col md={8}>
                        <Form>
                            <FloatingLabel label="Email*" id="emails1">
                                <Form.Control id="emails" type="email" value={email} onChange={(event) => handleSubmit2(event.target.value)}/>
                                <a><strong>FORMAT: someone@example.ca</strong></a>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20, marginBottom:-10}}>
                    <Col md={8}>
                        <Form>
                            <FloatingLabel label="Comments" id="comment1">
                                <Form.Control id="comment" type="comment" style={{height:100}}/>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
                    <Col md={8}>
                        <Button id="subButton" size='lg' style={{width:'100%'}} onClick={(event) => handleSubmit3(event.target.value)}> Submit </Button>
                    </Col>
                </Row>
                <Row className='bg-dark align-items-center justify-content-around' style={{marginTop:20}}>
                    <Col md={2} >
                        <img src={require("./Images/contact3.png")} alt="cars1" style={{height: '100%', width:' 100%', objectFit: 'scale-down', marginTop:15}}/>
                        <p style={{color:'white', textAlign:'center'}}>
                            588  Parkway Rd.<br></br> 
                            Ottawa, Ontario, K9N 0Y1 
                        </p>
                    </Col>

                    <Col md={2}>
                        <img src={require("./Images/contact1.png")} alt="cars1" style={{height: '100%', width:' 100%', objectFit: 'scale-down', marginTop:15}}/>
                        <p style={{color:'white', textAlign:'center'}}>
                            Phone Number: 613-765-0912<br></br> 
                            Fax Number:  613-896-2347
                        </p>
                    </Col>

                    <Col md={2}>
                        <img src={require("./Images/contact2.png")} alt="cars1" style={{height: '100%', width:' 100%', objectFit: 'scale-down', marginTop:15}}/>
                        <p style={{color:'white', textAlign:'center', marginBottom:40}}>
                            exotic.drives@gmail.com<br></br> 
                        </p>
                    </Col>
                </Row>
            </Container> 
        </div>
     );
}
 
export default ContactPage;