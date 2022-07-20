import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const VehiclesPage1 = () => {
    const [filter, setFilter] = useState('');
    const handleButton = (event) => {
        if(filter == 0){
            window.location.href = "/vikrantkumar_seg3125_project2/#/Vehicles";
        }
        else if(filter == 2){
            window.location.href = "/vikrantkumar_seg3125_project2/#/Vehicles_2";
        }

    }
    window.scrollTo(0, 0);
    
    return ( 
        <div className="vehicles">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Our Vehicles </strong></h1>
            
            <div className='text-end d-flex align-items-end justify-content-end'>
                <Form.Select size="lg" style={{width:'15%'}} value={filter} onChange={(event) => setFilter(event.target.value)}>
                    <option value="1" selected>Price: High to Low</option>
                    <option value="0">None</option>
                    <option value="2">Price: Low to High</option>
                </Form.Select>
                <Button className='bg-info' size='lg' style={{fontFamily:"serif", marginTop:4, marginRight:40}} onClick={(event) => handleButton(event.target.value)}> Filter </Button>
            </div>
            <hr></hr>
            <Container fluid style={{fontFamily:"serif", textAlign:'center'}}>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Bugatti Veyron Super Sport</strong></Card.Header>
                            <Card.Img src={require("./CarImages/b123.jpg")} variant='top' style={{width: '24.9rem', height:'16.6rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle6"> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem', height:'22rem'}} text='light' bg='dark'>
                            <Card.Header style={{marginBottom:20}}><strong> McLaren Senna </strong></Card.Header>
                            <Card.Img src={require("./CarImages/m123.webp")} variant='top' style={{width: '24.9rem', marginBottom:20, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle9"> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Lamborghini Countach </strong></Card.Header>
                            <Card.Img src={require("./Images/v1.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle1"> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem', height:'22rem'}} text='light' bg='dark'>
                            <Card.Header style={{marginBottom:20}}><strong> Lamborghini Veneno Roadster</strong></Card.Header>
                            <Card.Img src={require("./CarImages/o123.jpg")} variant='top' style={{width: '24.9rem', height:'14rem', marginBottom:20, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle8"> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Ferrari F40 </strong></Card.Header>
                            <Card.Img src={require("./Images/v2.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle2"> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem', height:'22rem'}} text='light' bg='dark'>
                            <Card.Header style={{marginBottom:20}}><strong> Lamborghini Aventador SVJ </strong></Card.Header>
                            <Card.Img src={require("./CarImages/l123.jpg")} variant='top' style={{width: '24.9rem', marginBottom:20, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle7"> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Mercedes Benz SLS AMG Black Series </strong></Card.Header>
                            <Card.Img src={require("./Images/v6.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/vikrantkumar_seg3125_project2/#/Vehicle5" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Porsche 918 Spyder </strong></Card.Header>
                            <Card.Img src={require("./CarImages/cc123.jpg")} variant='top' style={{width: '24.9rem', height:'16.6rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}}href="/vikrantkumar_seg3125_project2/#/Vehicle3"> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Dodge Viper ACR </strong></Card.Header>
                            <Card.Img src={require("./CarImages/d123.jpg")} variant='top' style={{width: '24.9rem', height:'16rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle10"> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Chevrolet Corvette C7 ZR1 </strong></Card.Header>
                            <Card.Img src={require("./Images/v1444.jpg")} variant='top' style={{width: '24.9rem', height:'16rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle11"> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Porsche Carrera GT </strong></Card.Header>
                            <Card.Img src={require("./CarImages/v1.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' style={{marginTop:4}} href="/vikrantkumar_seg3125_project2/#/Vehicle4"> Learn More</Button>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Lexus LFA </strong></Card.Header>
                            <Card.Img src={require("./CarImages/x123.jpg")} variant='top' style={{width: '24.9rem', height:'16rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/vikrantkumar_seg3125_project2/#/Vehicle12" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </div>
     );
}
 
export default VehiclesPage1;