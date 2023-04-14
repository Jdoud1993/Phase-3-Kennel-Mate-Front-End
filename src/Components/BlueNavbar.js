import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function BlueNavBar() {
  return (
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Kennel Mate</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Shelters">
              <Nav.Link>Shelters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Animals">
              <Nav.Link>Animals</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AnimalForm">
              <Nav.Link>Add Animal</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ShelterForm">
              <Nav.Link>Add Shelter</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default BlueNavBar;