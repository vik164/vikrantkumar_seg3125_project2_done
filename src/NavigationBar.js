import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
    return (  
        <Navbar bg="dark" expand="md">
        <Container md style={{padding: 5, fontFamily:'serif'}}>
            <Navbar.Brand href="/vikrantkumar_seg3125_project2/#/Home" style={{fontSize:'xx-large', color:"white",}}>
                Exotic Drives
                <img src={require("./CarImages/logo2.png")} alt="smile" width="70"></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end flex-grow-1 pe-5" style={{fontSize:'x-large'}}>
                    <Nav.Link href="/vikrantkumar_seg3125_project2/#/Home" style={{color: 'white'}} >Home</Nav.Link>
                    <Nav.Link href="/vikrantkumar_seg3125_project2/#/Services" style={{color: 'white'}} >Services</Nav.Link>
                    <Nav.Link href="/vikrantkumar_seg3125_project2/#/Vehicles" style={{color: 'white'}} >Vehicles</Nav.Link>
                    <Nav.Link href="/vikrantkumar_seg3125_project2/#/Contact" style={{color: 'white'}} >Contact Us</Nav.Link>
                    <Nav.Link href="/vikrantkumar_seg3125_project2/#/Reserve" style={{color: 'white', backgroundColor:"#0d6efd", borderRadius:"8px"}} >Reserve</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
 
export default NavigationBar;