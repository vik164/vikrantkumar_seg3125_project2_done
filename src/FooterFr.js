import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterFr = () => {
    return (  
            <Container fluid className='text-center' style={{marginTop:20, backgroundColor:"#212529", textalign:'center'}}>
                <h1 style={{color: 'white', fontFamily:"serif", textalign:'center', paddingTop:20}}><strong> Exotic Drives </strong></h1>
                <Row>
                    <Col md={4}>
                        <div className='p-2 text-center'>
                            <h1 style={{fontsize: 30, color:'#e3f2fd', textalign: 'center', verticalalign:'baseline', fontFamily:"serif"}}>Nous Contacter</h1>
                            <p style={{color:'#e3f2fd', textalign:'center', fontFamily:"serif"}}>
                                588  Parkway Route <br></br> 
                                Ottawa, Ontario, K9N 0Y1 <br></br> 
                                613 - 765 - 0912 <br></br>  
                                exotic.drives@gmail.com <br></br>  
                            </p>
                        </div>
                    </Col> 
                    <Col md={4}>
                        <div className="p-2 text-center" style={{textalign: 'center',  backgroundcolor: 'black'}}>
                            <a href="https://www.instagram.com/">
                                <img className="img-fluid " style={{height:50, width:50, margin: 10}} src={require("./Images/insta.png")} alt="instagram"></img>
                            </a>
                            <a href="https://www.twitter.com/">
                                <img className="img-fluid" style={{height:50, width:50, margin: 10}} src={require("./Images/twitter.png")} alt="twitter"></img>
                            </a>
                            <a href="https://www.facebook.com/">
                                <img className="img-fluid" style={{height:50, width:50, margin: 10}} src={require("./Images/facebook.png")} alt="facebook"></img>
                            </a>
                        </div>
                    </Col> 
                    <Col md={4}>
                        <div className="p-2 text-center" style={{textalign: 'center',  backgroundcolor: 'black'}}>
                            <h1 style={{fontsize: 30, color:'white', textalign: 'center', verticalalign:'baseline', fontFamily:"serif"}}>Plan Du Site</h1>
                            <a href="/vikrantkumar_seg3125_project2_done#/HomeFr" style={{textalign: 'center', fontFamily:"serif"}}>Maison</a> <br></br> 
                            <a href="/vikrantkumar_seg3125_project2_done#/ServicesFr" style={{textalign: 'center', fontFamily:"serif"}}>Services</a> <br></br> 
                            <a href="/vikrantkumar_seg3125_project2_done#/Vehicles" style={{textalign: 'center', fontFamily:"serif"}}>Véhicules</a> <br></br> 
                            <a href="/vikrantkumar_seg3125_project2_done#/Contact" style={{textalign: 'center', fontFamily:"serif"}}>Nous Contacter</a> <br></br> 
                            <a href="/vikrantkumar_seg3125_project2_done#/FAQFr" style={{textalign: 'center', fontFamily:"serif"}}>FQA</a> <br></br>
                        </div>
                    </Col> 
                </Row>
            </Container>
    );
}
 
export default FooterFr;