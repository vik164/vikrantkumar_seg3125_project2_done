import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ServicesPageFr = () => {
    window.scrollTo(0, 0);
    return ( 
        <div className="services">
            <Container fluid className='d-flex align-items-end justify-content-end'>
                <Button variant='dark' href="/vikrantkumar_seg3125_project2_done/#/Services" style={{marginTop:5, marginBottom:-15, marginRight:-5,fontFamily:"serif", width:60, height:40, borderRadius:'50px'}}>EN</Button>
            </Container>
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Nos Services </strong></h1>
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark' md={true} style={{marginBottom:15, padding:20}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '43rem'}}>
                            <Card.Img src={require("./Images/wed.jpg")} variant='top' style={{width: '42.8rem', height:'28rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Mariages </Card.Title>
                                <Card.Text>
                                    Votre mariage est la seule chose qui compte, les mariés sont les bienvenus pour explorer notre excellente gamme de voitures disponibles pour amplifier votre célébration. Renseignez-vous sur notre collection de blanc ou d'autres couleurs, car nous avons une large sélection qui rendra votre journée vraiment spéciale, à partir de seulement 99,00 $ par jour. Réservez dès aujourd'hui votre voiture idéale pour le mariage ! Le véhicule est agrémenté d'un chauffeur si besoin.
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RÉSERVEZ MAINTENANT </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '43rem'}}>
                            <Card.Img src={require("./Images/grad.jpg")} variant='top' style={{width: '42.9rem', height:'28rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Remise Des Diplômes Et Bal </Card.Title>
                                <Card.Text>
                                    L'un des jours les plus importants pour nos enfants est la fin de l'école et le début de l'âge adulte.En ce jour important,rendez-le unique avec un véhicule prestigieux d'Exotic Drives! Mieux encore, venez louer cette voiture parfaite et profitez-en pendant toute une journée; oui,nous offrons cette voiture idéale des finissants, à partir de seulement 50$ par jour! Réservez votre voiture de parfaite dès aujourd'hui! Le véhicule est agrémenté d'un chauffeur si besoin. 
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RÉSERVEZ MAINTENANT </Button>
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
                                <Card.Title> Cinéma Et Publicités </Card.Title>
                                <Card.Text>
                                    Vous avez besoin d'un véhicule pour une production cinématographique ou publicitaire ? Nos voitures seront parfaites, devant et derrière la caméra, pour répondre aux besoins de l'équipe de production.
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RÉSERVEZ MAINTENANT </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '43rem'}}>
                            <Card.Img src={require("./Images/cor.jpg")} variant='top' style={{height: 385}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Entreprise </Card.Title>
                                <Card.Text>
                                    Vous voulez faire une publicité splash? Nous pouvons personnaliser nos voitures aux couleurs de votre entreprise. Faites les choses en grand et exposez-vous!
                                </Card.Text>
                                <Button href="/vikrantkumar_seg3125_project2_done#/Reserve"> RÉSERVEZ MAINTENANT </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default ServicesPageFr;