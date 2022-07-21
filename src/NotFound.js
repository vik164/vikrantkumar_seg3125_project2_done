import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundPage = () => {
    return ( 
        <div className="reserve">
            <h1 className="" style={{fontFamily:"serif", marginTop:15, marginLeft:25}}><strong> PAGE NOT FOUND </strong></h1>
            <Button variant="secondary" href="/vikrantkumar_seg3125_project2_done/#/Home" style={{fontFamily:"serif", marginLeft:25, width:'23%'}}>Back To Home</Button>
        </div>
     );
}

export default NotFoundPage;