import {Navbar as NavbarBs, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
          <Nav.Link as={NavLink} to={"/store"}>Store</Nav.Link>
          <Nav.Link as={NavLink} to={"/about"}>About</Nav.Link>
        </Nav>

        <Button variant="outline-primary" style={{position: "relative"}}>
          Cart

          <div 
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{
              color: "white", 
              width: "1.5rem", 
              height: "1.5rem", 
              position: "absolute", 
              bottom: 0, 
              right: 0, 
              transform: "translate(25%, 25%)"
            }}
          >3</div>
        </Button>
      </Container>
    </NavbarBs>
  )
}

export default Navbar