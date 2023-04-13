import React from "react"
import { Col, Container, Row, Image, Carousel } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import data from "./data.json"
import { LinkContainer } from "react-router-bootstrap"
import { useGlobalContext } from "./context"
function Planets() {
  return (
    <Container className="vh-100 overflow-hidden">
      {data.map((item, index) => (
        <Row>
          <Col md={6} className="vh-100 d-flex justify-content-center align-items-center">
            <Image fluid src={item.images.planet} />
          </Col>
          <Col md={6} className="vh-100">
            <Card>
              <Card.Body className="text-light">
                <Card.Title as="h1">{item.name}</Card.Title>
                <Card.Text>{item.overview.content}</Card.Text>
                <Card.Text>
                  Source:
                  <a href={item.overview.source} className="me-2 ms-2">
                    Wikipedia
                    <Image fluid src="./assets/icon-source.svg" />
                  </a>
                </Card.Text>{" "}
              </Card.Body>
              <Nav variant="pills" defaultActiveKey="">
                <LinkContainer to="/">
                  <Nav.Item>
                    <Nav.Link href="/" bsPrefix="nav-link__mercury">
                      <span>01</span>OVERVIEW
                    </Nav.Link>
                  </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/mercury-structure">
                  <Nav.Item>
                    <Nav.Link href="/mercury-structure" bsPrefix="nav-link__mercury__structure">
                      <span>02</span>Internal Structure
                    </Nav.Link>
                  </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/mercury-geology">
                  <Nav.Item>
                    <Nav.Link href="/mercury-geology" bsPrefix="nav-link__mercury__geology">
                      <span>03</span>Surface Geology
                    </Nav.Link>
                  </Nav.Item>
                </LinkContainer>
              </Nav>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default Planets
