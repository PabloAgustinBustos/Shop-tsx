import {Navbar as NavbarBs, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
          <Nav.Link as={NavLink} to={"/store"}>Store</Nav.Link>
          <Nav.Link as={NavLink} to={"/about"}>About</Nav.Link>
        </Nav>

        <Button>Cart</Button>
      </Container>
    </NavbarBs>
  )
}

export default Navbar