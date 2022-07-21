import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FQAPageFr = () => {
    window.scrollTo(0, 0);
    return ( 
        <div className="vehicles">
            <Container fluid className='d-flex align-items-end justify-content-end'>
                <Button variant='dark' href="/vikrantkumar_seg3125_project2_done/#/FQA" style={{marginTop:5, marginBottom:-15, marginRight:-5,fontFamily:"serif", width:60, height:40, borderRadius:'50px'}}>EN</Button>
            </Container>
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Questions Fréquemment Posées </strong></h1>
            <p style={{textAlign:'center'}}>Voici quelques réponses questions fréquemment posées.</p>
            <Container fluid>
                <hr></hr>
                <Row className='bg-dark' style={{height:180}}>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> Qu'est-ce qu'Exotic Drives? </Card.Title>
                                <Card.Text>
                                    Exotic Drives est une entreprise de location située à Ottawa, en Ontario. Nous louons uniquement des véhicules exotiques.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> Peut emmener le véhicule aux États-Unis? </Card.Title>
                                <Card.Text>
                                    Malheureusement, vous ne pouvez pas emmener le véhicule aux États-Unis. Le véhicule doit rester en Ontario.
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
                                <Card.Title> Comment puis-je voir les véhicules dont vous disposez? </Card.Title>
                                <Card.Text>
                                    Si vous regardez la barre de navigation, vous verrez une option de véhicules où vous trouverez notre collection de véhicules et des liens vers des pages détaillées sur les voitures individuelles.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> Comment puis-je vous contacter les gars? </Card.Title>
                                <Card.Text>
                                    Si vous regardez la barre de navigation, vous verrez une option de contact où vous trouverez tous les moyens de nous joindre : par téléphone, e-mail, visite en personne ou formulaire de contact.
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
                                <Card.Title> Quelle est la politique d'annulation? </Card.Title>
                                <Card.Text>
                                    Si vous avez réservé un véhicule et que nous envoyons un e-mail de confirmation, vous devez nous en informer 48 heures à l'avance à compter de votre réservation. Si vous ne parvenez pas à nous contacter concernant l'annulation, vous serez facturé 250 $. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> Que se passe-t-il si je ne peux pas arriver à temps pour le dépôt? </Card.Title>
                                <Card.Text>
                                    Si vous ne pouvez pas vous rendre au lieu de dépôt dans le créneau horaire désigné, des frais de 50 $ de l'heure vous seront facturés. Cependant, si vous nous appelez à l'avance, nous pouvons organiser quelque chose.
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
                                <Card.Title> Comment puis-je réserver un véhicule? </Card.Title>
                                <Card.Text>
                                    Pour que vous réserviez une de nos voitures exotiques, cliquez sur le bouton de réservation et il vous dirigera vers la page où vous devrez entrer toutes les informations.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> Comment fonctionne l'assurance? </Card.Title>
                                <Card.Text>
                                    L'assurance est un coût distinct pour chaque véhicule, que vous devez payer. Chaque véhicule a un prix d'assurance différent.
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
                                <Card.Title> Quel est l'âge requis pour louer un véhicule? </Card.Title>
                                <Card.Text>
                                    Tant que le conducteur possède un permis de conduire complet valide (G), vous pouvez louer nos véhicules. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> Quels modes de paiement sont acceptés? </Card.Title>
                                <Card.Text>                            
                                    Nous acceptons toutes sortes de méthodes de paiement, AMEX, chèque, MasterCard, Visa et E-transfert.
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
                                <Card.Title> Combien de voitures puis-je louer à la fois? </Card.Title>
                                <Card.Text>
                                    Un client peut louer jusqu'à 2 voitures à la fois.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '40rem'}}>
                            <Card.Body>
                                <Card.Title> J'ai un ticket, que va-t-il se passer? </Card.Title>
                                <Card.Text>
                                    Vous devrez payer le billet et tous les autres frais.
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
 
export default FQAPageFr;