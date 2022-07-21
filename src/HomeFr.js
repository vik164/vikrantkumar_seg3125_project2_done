import { Carousel, Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePageFr = () => {
    return (  
        <div className="home">
            <Container fluid className='d-flex align-items-end justify-content-end'>
                <Button variant='dark' href="/vikrantkumar_seg3125_project2_done/#/Home" style={{marginTop:5, marginBottom:-15, marginRight:-5,fontFamily:"serif", width:60, height:40, borderRadius:'50px'}}>EN</Button>
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
                            <Button size='lg' href='/vikrantkumar_seg3125_project2_done/#/Vehicles' style={{width:'80%', itemalign:'center', marginBottom:30}}>Véhicules</Button>
                        </Col>

                        <Col md={true} className='text-center'>
                            <Button size='lg' href='/vikrantkumar_seg3125_project2_done/#/Reserve' style={{width:'80%', itemalign:'center', marginBottom:30}}>Réservez Maintenant</Button>
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
                            <h3 style={{color:'white', textAlign:'center', marginTop:100, fontFamily:"serif"}}> Nos services </h3>
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}> Exotic Drives a beaucoup pour vos occasions importantes. Les services sont les mariages, la remise des diplômes et le bal des finissants, le cinéma et les publicités, et les entreprises. Nos services sont haut de gamme. Pour consulter nos services, cliquez sur le bouton ci-dessous.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2_done/#/ServicesFR' style={{margin:10, fontFamily:"serif"}}>Afficher Les Services</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={true} style={{textAlign:'center'}}>
                            <h3 style={{color:'white', textAlign:'center', marginTop:100, fontFamily:"serif"}}> Nos Véhicules </h3>
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}>Exotic Drives propose de nombreux véhicules pour toutes les occasions. Nos voitures sont vintage, rares, rapides et amusantes que vous ne trouverez nulle part. Venez dans nos succursales d'Ottawa pour le vérifier. Pour découvrir nos voitures et notre collection en ligne, cliquez sur le bouton ci-dessous.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2_done/#/Vehicles' style={{margin:10, fontFamily:"serif"}}>Voir Les Véhicules</Button>
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
                            <h3 style={{color:'white', textAlign:'center', marginTop:100, fontFamily:"serif"}}> Nous Contacter </h3>
                            <p style={{color:'white', textAlign:'center', marginTop:25, fontFamily:"serif"}}>Exotic Drives offrir tellement que vous pourriez vous sentir dépassé, vous pouvez nous contacter par téléphone, par e-mail ou lors d'une visite en personne et nous serons heureux de vous aider. Pour découvrir comment vous pouvez nous joindre, cliquez sur le bouton ci-dessous.</p>
                            <Button variant="outline-light" href='/vikrantkumar_seg3125_project2_done/#/Contact' style={{margin:10, marginBottom:25,fontFamily:"serif"}}>Nous Contacter</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
 
export default HomePageFr;