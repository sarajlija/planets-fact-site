import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import data from "../../data.json"
import { LinkContainer } from "react-router-bootstrap"

function MercuryStructure() {
  return (
    <Container>
      <Row>
        <Col md={6} className="vh-100 d-flex justify-content-center align-items-center">
          <Image src={data[0].images.internal} />
        </Col>
        <Col md={6} className="vh-100">
          <Card>
            <Card.Body className="text-light">
              <Card.Title as="h1">{data[0].name}</Card.Title>
              <Card.Text>{data[0].structure.content}</Card.Text>
              <Card.Text>
                Source:
                <a href={data[0].structure.source} className="me-2 ms-2">
                  Wikipedia
                  <Image fluid src="./assets/icon-source.svg" />
                </a>
              </Card.Text>{" "}
            </Card.Body>
            <Nav variant="pills" defaultActiveKey="">
              <LinkContainer to="/">
                <Nav.Link href="/" bsPrefix="nav-link__mercury__overview">
                  <span>01</span>OVERVIEW
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/mercury-structure">
                <Nav.Link href="/mercury-structure" bsPrefix="nav-link__mercury__structure">
                  <span>02</span>Internal Structure
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/mercury-geology">
                <Nav.Link href="/mercury-geology" bsPrefix="nav-link__mercury__geology">
                  <span>03</span>Surface Geology
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MercuryStructure
