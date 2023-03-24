import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BlueNavBar() {
  return (
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Kennel Mate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Shelters">Shelters</Nav.Link>
            <Nav.Link href="/Animals">Animals</Nav.Link>
            <Nav.Link href="/AnimalForm">Add Animal</Nav.Link>
            <Nav.Link href="/ShelterFrom">Add Shelter</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default BlueNavBar;