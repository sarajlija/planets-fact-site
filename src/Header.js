import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import data from "./data.json"
import { LinkContainer } from "react-router-bootstrap"

function Header() {
  return (
    <Navbar bg="" expand="sm">
      <Container className="align-items-center d-flex justify-content-center">
        <Navbar.Brand href="#" className="text-light">
          The planets
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav className="ms-auto my-2 my-lg-0 " style={{ maxHeight: "85px" }} navbarScroll>
            {/*data.map((item, index) => (
              <Nav.Item key={index}>
                <Link to={`${item.name.toLowerCase() !== "mercury" ? `/${item.name.toLowerCase()}` : "/"}`} className={`nav-link__header ${activeState !== "" ? activeState : activeState === "active"}`} onClick={() => handleClick(item, index)}>
                  {item.name}
                </Link>
              </Nav.Item>
            ))*/}
            <LinkContainer to="/">
              <Nav.Link href="/" bsPrefix="nav-link__mercury ">
                Mercury
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/venus">
              <Nav.Link href="/venus" bsPrefix="nav-link__venus">
                Venus
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/earth">
              <Nav.Link href="/earth" bsPrefix="nav-link__earth">
                Earth
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/mars">
              <Nav.Link href="/mars" bsPrefix="nav-link__mars">
                Mars
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/jupiter">
              <Nav.Link href="/jupiter" bsPrefix="nav-link__jupiter">
                Jupiter
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/saturn">
              <Nav.Link href="/saturn" bsPrefix="nav-link__saturn">
                Saturn
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/uranus">
              <Nav.Link href="/uranus" bsPrefix="nav-link__saturn">
                Uranus
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/neptune">
              <Nav.Link href="/neptun" bsPrefix="nav-link__neptun">
                Neptune
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
