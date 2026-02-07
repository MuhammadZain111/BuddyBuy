import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <Container>
          <h1 className="fw-bold">Contact</h1>
          <p className="fs-5">Welcome to Contact Section</p>
        </Container>
      </section>

      {/* MAP + FORM */}
      <section className="py-5">
        <Container>
          <Row className="g-4 align-items-stretch">
            {/* MAP */}
            <Col lg={6}>
              <div className="h-100 rounded overflow-hidden shadow-sm">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Izmir&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  loading="lazy"
                ></iframe>
              </div>
            </Col>

            {/* FORM */}
            <Col lg={6}>
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <h3 className="fw-bold mb-3 text-center">Contact Form</h3>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="tel" placeholder="Phone Number" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Message"
                    />
                  </Form.Group>

                  <Button
                    variant="dark"
                    className="w-100 rounded-pill py-2"
                  >
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4 text-center">
            <Col md={4}>
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <div className="fs-2 mb-2">📍</div>
                <h5 className="fw-bold">Our Location</h5>
                <p className="mb-0">
                  House #5, Street #98, Brasilia, Brazil
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <div className="fs-2 mb-2">✉️</div>
                <h5 className="fw-bold">Email Us</h5>
                <p className="mb-0">contact@company.com</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <div className="fs-2 mb-2">📞</div>
                <h5 className="fw-bold">Call Us</h5>
                <p className="mb-0">+55 61 1234-5678</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
