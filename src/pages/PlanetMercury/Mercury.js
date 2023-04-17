import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import data from "../../data.json"
import "./Mercury.css"
import { LinkContainer } from "react-router-bootstrap"
function Mercury() {
  return (
    <Container>
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image fluid src={data[0].images.planet} />
        </Col>
        <Col md={6} className="">
          <Card>
            <Card.Body className="text-light">
              <Card.Title as="h1">{data[0].name}</Card.Title>
              <Card.Text>{data[0].overview.content}</Card.Text>
              <Card.Text>
                Source:
                <a href={data[0].overview.source} className="me-2 ms-2">
                  Wikipedia
                  <Image fluid src="./assets/icon-source.svg" />
                </a>
              </Card.Text>{" "}
            </Card.Body>
            <Nav variant="pills" defaultActiveKey="">
              <LinkContainer to="/">
                <Nav.Link href="/" bsPrefix="nav-link__mercury">
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
      <Row xs={1} md={4} className="g-4 ">
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title bsPrefix="">ROTATION TIME</Card.Title>
              <Card.Footer as="h1">{data[0].rotation}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>REVOLUTION TIME</Card.Title>
              <Card.Footer as="h1">{data[0].revolution}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>radius</Card.Title>
              <Card.Footer as="h1">{data[0].radius}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>AVERAGE TEMP.</Card.Title>
              <Card.Footer as="h1">{data[0].temperature}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Mercury
