
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Topmenu=()=>{
  const navigate=useNavigate();
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mobile-phones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="cartproduct">My Cart</Nav.Link>
            <Nav.Link as={Link} to="searchproduct">Search Product</Nav.Link>
            <Nav.Link as={Link} to="productdisplay">Product Display</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaShoppingBag onClick={()=>{navigate("/cartproduct")}}/>

            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topmenu;