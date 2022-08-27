import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/img/f1_logo.svg'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-5">
      <Container>
        <Navbar.Brand>
          <img
              alt="F1"
              src={logo}
              width="150px"
              height="auto"
          />{" "}
          <span className="d-block">ReactJS Exercise</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/alanvieirads" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://linkedin.com/in/alanvieirads" target="_blank">Linkedin</Nav.Link>
            <Nav.Link href="https://alanvieirads.com" target="_blank">Site</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header