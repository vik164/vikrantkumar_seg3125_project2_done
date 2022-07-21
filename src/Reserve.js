import {Container, Row, Col, Button, ProgressBar, FloatingLabel, Form, Alert} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReservePage = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [delivery, setDelivery] = useState('');
    const [vehicle, setVehicle] = useState('Select One');
    const [service, setService] = useState('Select One');
    const [date, setDate] = useState('Select One');
    const [length, setLength] = useState('Select One');

    const handleButton1 = () => {
        if(fname != '' && lname != ''){
            document.getElementById('progBar1').style.display = 'none';
            document.getElementById('progBar2').style.display = 'block';
        
            document.getElementById('colNum3').style.display = 'block';
            document.getElementById('colNum4').style.display = 'block';
            document.getElementById('colNum55').style.display = 'block';
            document.getElementById('colNum5555').style.display = 'block';
            document.getElementById('nextB1').style.display = 'none';

            document.getElementById('fname').style.borderColor = "green";
            document.getElementById('lname').style.borderColor = "green";
        }
        else{
            document.getElementById('fname').style.borderColor = "red";
            document.getElementById('lname').style.borderColor = "red";
        }
    }

    const handleButton2 = () => {
        if(phoneNum != '' && email != ''){
            document.getElementById('progBar2').style.display = 'none';
            document.getElementById('progBar3').style.display = 'block';

            document.getElementById('colNum6').style.display = 'block';
            document.getElementById('colNum7').style.display = 'block';
            document.getElementById('nextB2').style.display = 'none';
            document.getElementById('nextB3').style.display = 'block';

            document.getElementById('emails').style.borderColor = "green";
            document.getElementById('phoneNumber').style.borderColor = "green";
        }
        else{
            document.getElementById('emails').style.borderColor = "red";
            document.getElementById('phoneNumber').style.borderColor = "red";
        }
    }

    const handleButton3 = () => {
        if(vehicle != 'Select One' && service != 'Select One'){
            document.getElementById('progBar3').style.display = 'none';
            document.getElementById('progBar5').style.display = 'block';

            document.getElementById('colNum8').style.display = 'block';
            document.getElementById('colNum9').style.display = 'block';
            document.getElementById('nextB3').style.display = 'none';
            document.getElementById('subB').style.display = 'block';

            document.getElementById('service').style.borderColor = "green";
            document.getElementById('vehicle').style.borderColor = "green";
        }
        else{
            document.getElementById('service').style.borderColor = "red";
            document.getElementById('vehicle').style.borderColor = "red";
        }
    }

    const handleButton4 = () => {
        if(date != 'Select One' && length != 'Select One'){
            document.getElementById('progBar5').style.display = 'none';
            document.getElementById('progBar4').style.display = 'block';

            document.getElementById('rowNum1').style.display = 'none';
            document.getElementById('colNum3').style.display = 'none';
            document.getElementById('colNum4').style.display = 'none';
            document.getElementById('colNum55').style.display = 'none';
            document.getElementById('colNum5555').style.display = 'none';
            document.getElementById('colNum6').style.display = 'none';
            document.getElementById('colNum7').style.display = 'none';
            document.getElementById('colNum8').style.display = 'none';
            document.getElementById('colNum9').style.display = 'none';
            document.getElementById('successMessage').style.display = "block";
            document.getElementById('subB').style.display = 'none';
        }
        else{
            document.getElementById('date').style.borderColor = "red";
            document.getElementById('length').style.borderColor = "red";
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
            document.getElementById('nextB2').disabled = true;
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
            document.getElementById('emails').style.borderColor = "green";
            document.getElementById('nextB2').disabled = false;
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
            if(isNaN(event[i]) === true){
                document.getElementById('phoneNumber').style.borderColor = "red";
                document.getElementById('nextB2').disabled = true;
                checker = true;
            } 
            if(event.length == 10){
                checker2 = false;
            }
            else{
                document.getElementById('phoneNumber').style.borderColor = "red";
                document.getElementById('nextB2').disabled = true;
                checker2 = true;
            }
        }
        if(checker == false && checker2 == false){
            document.getElementById('phoneNumber').style.borderColor = "green";
            document.getElementById('nextB2').disabled = false;
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

    const handleDelivery = (event) => {
        setDelivery(event);
        let space = false;
        let length1 = false;
        let nums = false;
        if(event == false){
            return event;
        }

        if(event.length == 6 || event.length == 0){
            length1 = true;
            document.getElementById('postal1').style.borderColor = "lightgrey";
            document.getElementById('nextB2').disabled = false;
        }
        else{
            document.getElementById('postal1').style.borderColor = "red";
            document.getElementById('nextB2').disabled = true;
        }

        for(let i in event){
            if(event[i] == " " && event.length != 0){
                space = true;
            }
            else{
                document.getElementById('postal1').style.borderColor = "red";
                document.getElementById('nextB2').disabled = true;
            }
        }
        if(space != true && length1 == true){
            document.getElementById('postal1').style.borderColor = "lightgrey";
            document.getElementById('nextB2').disabled = false;
            if(isNaN(event[0]) === true){
                if(isNaN(event[1]) === false){
                    if(isNaN(event[2]) === true){
                        if(isNaN(event[3]) === false){
                            if(isNaN(event[4]) === true){
                                if(isNaN(event[5]) === false){
                                    nums = true;
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log(event);
        if(nums == false && event.length != 0){
            document.getElementById('postal1').style.borderColor = "red";
            document.getElementById('nextB2').disabled = true;
        }
        if(event.length < 2){
            document.getElementById('postal1').style.borderColor = "lightgrey";
            document.getElementById('nextB2').disabled = false;
        }
        if(space != true && length1 == true && nums == true){
            document.getElementById('postal1').style.borderColor = "green";
            document.getElementById('nextB2').disabled = false;
        }
    }

    return ( 
        <div className="reserve">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Reservation </strong></h1>
            <Container style={{fontFamily:"serif"}}>
                <Row>
                    <img  src={require("./Images/res1.png")} alt='image1' style={{objectFit: 'scale-down'}}></img>
                </Row>
                
                <div className='progressBar' id='progBar1'>
                    <ProgressBar now={25} label={'25%'}></ProgressBar>
                </div>

                <div className='progBar2' id='progBar2' style={{display:'none'}}>
                    <ProgressBar now={50} label={'50%'}></ProgressBar>
                </div>

                <div className='progBar3' id='progBar3' style={{display:'none'}}>
                    <ProgressBar now={75} label={'75%'}></ProgressBar>
                </div>

                <div className='progBar5' id='progBar5' style={{display:'none'}}>
                    <ProgressBar now={90} label={'90%'}></ProgressBar>
                </div>

                <div className='progBar4' id='progBar4' style={{display:'none'}}>
                    <ProgressBar now={100} label={'100%'}></ProgressBar>
                </div>
                
                <Row className='d-flex align-items-center justify-content-center'>
                    <Alert id="successMessage" variant='success' style={{display:'none', width: '98%', textAlign: 'center', marginBottom:-35, marginTop:20}}>
                        <Alert.Heading>Your Reservation Has Been Successfully Submitted</Alert.Heading>
                        <p>Thank you {fname} {lname}, for choosing Exotic Drives. You have submitted a reservation for the following service, {service}<br></br> with the {vehicle} for {length}  starting on {date}. The details for your reservation has been email to you. <br></br>We will get back to you shortly with a confirmation! We look forward to meeting you!</p>
                        <a href="/vikrantkumar_seg3125_project2_done/#/Survey">Answer this quick feedback survey.</a>
                    </Alert>
                </Row>
                <Row style={{marginTop:5}} id="rowNum1">
                    <Col md={6} id="colNum1">
                        <Form>
                            <FloatingLabel label="First Name*" id="fname1">
                                <Form.Control id="fname" size="lg" type="fname" value={fname} onChange={(event) => handleFname(event.target.value)}/>
                            </FloatingLabel>
                        </Form>
                    </Col>
                    <Col md={6} id="colNum2">
                        <Form>
                            <FloatingLabel label="Last Name*" id="lname1">
                                <Form.Control id="lname" size="lg" type="lname" value={lname} onChange={(event) => handleLname(event.target.value)}/>
                            </FloatingLabel>
                        </Form>
                    </Col>
                    <Button onClick={handleButton1} size='md' style={{marginTop:10, marginLeft:12, width:200, height:50}} id='nextB1'> Next </Button>
                </Row>               
                <Row style={{marginTop:10}} id="rowNum2">
                    <Col md={6} style={{display:'none'}} id="colNum3">
                        <Form>
                            <FloatingLabel label="Phone Number*" id="phoneNumber1">
                                <Form.Control id="phoneNumber" size="lg" type="phoneNum" value={phoneNum} maxLength={10} onChange={(event) => handleSubmit(event.target.value)}/>
                                <a><strong>FORMAT: ##########</strong></a>
                            </FloatingLabel>
                        </Form>
                    </Col>
                    <Col md={3} style={{display:'none'}} id="colNum5555">
                        <Form>
                            <FloatingLabel label="Postal Code" id="postal">
                                <Form.Control type="address" id="postal1" maxLength={6} value={delivery} onChange={(event) => handleDelivery(event.target.value)}/>
                                <a><strong>FORMAT: K1C2V3</strong></a>
                            </FloatingLabel>
                        </Form>
                        
                    </Col>
                    <Col md={3} style={{display:'none'}} id="colNum55">
                        <Form>
                            <FloatingLabel label="How did you hear about us?" >
                                <Form.Select type="lname">
                                    <option value="0" selected disabled>Select One</option>
                                    <option value="1">Internet</option>
                                    <option value="2">Newspaper</option>
                                    <option value="3">Friend</option>
                                    <option value="4">Other</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row style={{marginTop:10}} id="rowNum3">
                    <Col md={112} style={{display:'none'}} id="colNum4">
                        <Form>
                            <FloatingLabel label="Email*" id="emails1">
                                <Form.Control id="emails" type="email" value={email} onChange={(event) => handleSubmit2(event.target.value)}/>
                                <a><strong>FORMAT: someone@example.ca</strong></a>
                            </FloatingLabel>
                        </Form>
                        <Button onClick={handleButton2} size='md' style={{marginTop:10, width:200, height:50}} id='nextB2'> Next </Button>
                    </Col>
                </Row>
                <Row style={{marginTop:10}} id="rowNum4">
                    <Col md={6} style={{display:'none'}} id="colNum6">
                        <Form>
                            <FloatingLabel label="Choose Vehicle*" >
                                <Form.Select id="vehicle" value={vehicle} onChange={(event) => setVehicle(event.target.value)}>
                                    <option value="Select One" selected>Select One</option>
                                    <option value="Lamborghini Countach">Lamborghini Countach</option>
                                    <option value="Ferrari F40">Ferrari F40</option>
                                    <option value="Porsche 918 Spyder">Porsche 918 Spyder</option>
                                    <option value="Porsche Carrera GT">Porsche Carrera GT</option>
                                    <option value="Mercedes Benz SLS AMG Black Series">Mercedes Benz SLS AMG Black Series</option>
                                    <option value="Bugatti Veyron Super Sport">Bugatti Veyron Super Sport</option>
                                    <option value="Lamborghini Aventador SVJ">Lamborghini Aventador SVJ</option>
                                    <option value="Lamborghini Veneno">Lamborghini Veneno</option>
                                    <option value="McLaren Senna">McLaren Senna</option>
                                    <option value="Dodge Viper ACR">Dodge Viper ACR</option>
                                    <option value="Chevrolet Corvette C7 ZR1">Chevrolet Corvette C7 ZR1</option>
                                    <option value="Lexus LFA">Lexus LFA</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>
                    </Col>
                    <Col md={6} style={{display:'none'}} id="colNum7">
                        <Form>
                            <FloatingLabel label="Choose Service*" >
                                <Form.Select id="service" value={service} onChange={(event) => setService(event.target.value)}>
                                    <option value="Select One" selected >Select One</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Graduation and Prom">Graduation and Prom</option>
                                    <option value="Cinema and Advertisements">Cinema and Advertisements</option>
                                    <option value="Corporate">Corporate</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>
                        
                    </Col>
                    <Button onClick={handleButton3} size='md' style={{marginTop:10, marginLeft:12, width:200, height:50, display:'none'}} id='nextB3'> Next </Button>
                </Row>
                <Row style={{marginTop:10}} id="rowNum5">
                    <Col md={6} style={{display:'none'}} id="colNum8">
                        <Form>
                            <FloatingLabel label="Choose Date*" >
                                <Form.Select id="date" value={date} onChange={(event) => setDate(event.target.value)}>
                                    <option value="0" selected>Select One</option>
                                    <option value="Firday July 1">Firday July 1</option>
                                    <option value="Monday July 2">Monday July 2</option>
                                    <option value="Tuesday July 14">Tuesday July 14</option>
                                    <option value="Wednesday July 15">Wednesday July 15</option>
                                    <option value="Thursday July 16">Thursday July 16</option>
                                    <option value="Friday July 17">Friday July 17</option>
                                    <option value="Monday July 15">Monday July 15</option>
                                    <option value="Tuesday July 20">Tuesday July 20</option>
                                    <option value="Wednesday July 21">Wednesday July 21</option>
                                    <option value="Thursday July 22">Thursday July 22</option>
                                    <option value="Friday July 23">Friday July 23</option>
                                    <option value="Monday July 24">Monday July 24</option>
                                    <option value="Tuesday July 27">Tuesday July 27</option>
                                    <option value="Wednesday July 28">Wednesday July 28</option>
                                    <option value="Thursday July 29">Thursday July 29</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>                     
                    </Col>
                    <Col md={6} style={{display:'none'}} id="colNum9">
                        <Form>
                            <FloatingLabel label="Choose Rental Length*" >
                                <Form.Select id="length" value={length} onChange={(event) => setLength(event.target.value)}>
                                    <option value="Select One" selected>Select One</option>
                                    <option value="1 Day">1 day</option>
                                    <option value="2 Days">2 days</option>
                                    <option value="3 Days">3 days</option>
                                    <option value="4 Days">4 days</option>
                                    <option value="5 Days">5 days</option>
                                    <option value="6 Days">6 days</option>
                                    <option value="1 Week">1 week</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>
                    </Col>
                    <Button onClick={handleButton4} size='md' style={{marginTop:10, marginLeft:12, width:200, height:50, display:'none'}} id='subB'> Submit </Button>
                </Row>
            </Container>
        </div>
     );
}

export default ReservePage;