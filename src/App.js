
import './App.css';
import {Navbar,Container,Nav,NavDropdown,Row,Col,Image,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <Container>
      <Row>
        <Col sm={5}><Image src="https://picsum.photos/seed/picsum/500/400"/></Col>
        <Col sm={7}><p>Nature, in the broadest sense, is the physical world or universe.
           "Nature" can refer to the phenomena of the physical world, and also to life in general.</p>
           <Button variant="primary">Go somewhere</Button></Col>
      </Row>
      <Row>
      <Card className='bg-secondary text-white'>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
      </Row>
      
    </Container>
     
    </div>
  );
}

export default App;
