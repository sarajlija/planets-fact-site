import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import data from "./data.json"

function Header() {
  return (
    <Navbar bg="" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">
          The planets
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 " style={{ maxHeight: "85px" }} navbarScroll>
            {data.map((item, index) => (
              <Nav.Link key={index} href={`#active ${index}`}>
                {item.name}
              </Nav.Link>
            ))}
            {/*    
            <Nav.Link href="#action2">Venus</Nav.Link>
            <Nav.Link href="#action3">Earth</Nav.Link>
            <Nav.Link href="#action4">Mars</Nav.Link>
            <Nav.Link href="#action5">Jupiter</Nav.Link>
            <Nav.Link href="#action6">Saturn</Nav.Link>
            <Nav.Link href="#action7">Uranus</Nav.Link>
            <Nav.Link href="#action8">Neptune</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
