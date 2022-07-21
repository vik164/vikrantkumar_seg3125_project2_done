import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBarFr = () => {
    return (  
        <Navbar bg="dark" expand="md">
            <Container md style={{padding: 5, fontFamily:'serif'}}>
                <Navbar.Brand href="/vikrantkumar_seg3125_project2_done/#/HomeFr" style={{fontSize:'xx-large', color:"white",}}>
                    Exotic Drives
                    <img src={require("./CarImages/logo2.png")} alt="smile" width="70"></img>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-end flex-grow-1 pe-5" style={{fontSize:'x-large'}}>
                        <Nav.Link href="/vikrantkumar_seg3125_project2_done/#/HomeFr" style={{color: 'white'}} >Maison</Nav.Link>
                        <Nav.Link href="/vikrantkumar_seg3125_project2_done/#/ServicesFr" style={{color: 'white'}} >Services</Nav.Link>
                        <Nav.Link href="/vikrantkumar_seg3125_project2_done/#/Vehicles" style={{color: 'white'}} >Véhicules</Nav.Link>
                        <Nav.Link href="/vikrantkumar_seg3125_project2_done/#/Contact" style={{color: 'white'}} >Contactez</Nav.Link>
                        <Button href="/vikrantkumar_seg3125_project2_done/#/Reserve" style={{color: 'white',fontSize:'x-large'}} >Réserve</Button>
                    </Nav>                  
                </Navbar.Collapse>      
            </Container>    
        <Button variant='outline-secondary' href="/vikrantkumar_seg3125_project2_done/#/FQAFr" style={{color: 'white', fontFamily:"serif", marginRight:10, marginLeft:-70}}>FAQ</Button>
        </Navbar>
    );
}
 
export default NavigationBarFr;