import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const teamMembers = [
  {
    name: "Clara Wooden",
    role: "Designer",
    img: "https://via.placeholder.com/400",
  },
  {
    name: "John Wick",
    role: "Founder",
    img: "https://via.placeholder.com/400",
  },
  {
    name: "Harry Kane",
    role: "Designer",
    img: "https://via.placeholder.com/400",
  },
  {
    name: "You?",
    role: "",
    img: null,
  },
];








function About() {
  return (
    <>
    
      <section className="bg-light py-5 text-center">
        <Container>
          <h1 className="fw-bold">ABOUT US</h1>
          <p className="text-muted mb-0">
            Home <span className="mx-1">›</span> About Us
          </p>
        </Container>
      </section>

     

      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10} sm={12}>
              <h3 className="fw-bold mb-4">WHO WE ARE?</h3>

              <p className="text-muted">
                Morbi in erat malesuada, sollicitudin massa at, tristique nisl.
                Maecenas id eros scelerisque, vulputate tortor quis, efficitur
                arcu sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>

              <p className="fw-semibold">
                Vestibulum sit amet metus euismod, condimentum lectus id,
                ultrices sem.
              </p>

              <p className="text-muted">
                Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut.
                Vestibulum sit amet metus euismod, condimentum lectus id,
                ultrices sem.
              </p>

              <div className="mt-4">
                <p className="fw-semibold mb-2">Follow Us</p>
                <div className="d-flex gap-3 fs-5 text-muted flex-wrap">
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-google"></i>
                  <i className="bi bi-youtube"></i>
                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-whatsapp"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

  
      <section className="py-5 bg-white">
        <Container>
          <h3 className="fw-bold mb-4 text-center text-md-start">
            OUR TEAM
          </h3>

          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col
                key={index} xs={12} sm={6} md={4} lg={3}
                className="text-center"
              >
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid mb-3"
                  />
                ) : (
                  <div
                    className="bg-light d-flex align-items-center justify-content-center mb-3"
                    style={{ height: "100%" }}
                  >
                    <h4 className="text-muted">YOU?</h4>
                  </div>
                )}

                <h6 className="fw-bold mb-0">{member.name}</h6>
                {member.role && (
                  <small className="text-muted text-uppercase">
                    {member.role}
                  </small>
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
