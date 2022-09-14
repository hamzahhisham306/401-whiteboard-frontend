import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function ListExample() {
  return (

    <Nav defaultActiveKey="/home" as="ul" style={{marginBottom:'80px', marginTop:'30px', backgroundColor:'#1C6758', padding:'20px'}} >
      <Nav.Item as="li" style={{marginLeft:'25px' }}>
      <Link to='/' style={{color:'#EEF2E6' ,textDecoration:'none'}}>Home</Link>
      </Nav.Item>
      <Nav.Item as="li" style={{marginLeft:'25px'}}>
      <Link to='/formPost'style={{color:'#EEF2E6',textDecoration:'none'}}>Form Post</Link>   
      </Nav.Item>
      <Nav.Item as="li" style={{marginLeft:'25px'}}>
      <Link style={{color:'#EEF2E6',textDecoration:'none'}}>Contact Us</Link>   
      </Nav.Item>
    </Nav>

  );
}

export default ListExample;