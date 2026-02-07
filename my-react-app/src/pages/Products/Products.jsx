import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Heart, ArrowRepeat, Cart } from "react-bootstrap-icons";

import { products } from "../../constants/slice"; 





//  const products = [
//   {
//     id: 1,
//     name: "Bombi Chair",
//     price: "€ 399,00",
//     img: "https://via.placeholder.com/350",
//   },
//   {
//     id: 2,
//     name: "Marvelous Modern 3 Seater",
//     price: "€ 599,00",
//     img: "https://via.placeholder.com/350",
//     badge: "15% Off",
//   },
//   {
//     id: 3,
//     name: "Chair With Armrests",
//     price: "€ 200,00",
//     img: "https://via.placeholder.com/350",
//   },
// ];

function Products() {
  return (
    <>
      {/* HERO */}
      <section className="bg-light py-5 text-center">
        <Container>
          <h1 className="fw-bold">CHAIRS</h1>
          <p className="text-muted mb-0">
            Home <span className="mx-1">›</span> Products{" "}
            <span className="mx-1">›</span> Chairs
          </p>
        </Container>
      </section>

      <Container className="py-5">
        <Row>
          {/* SIDEBAR */}
          <Col lg={3} md={4} className="mb-4">
            <div className="border p-4">
              <h5 className="fw-bold mb-3">FILTER</h5>
              <Form.Check label="Casali" />
              <Form.Check label="Decar" />
              <Form.Check label="Fantini" />
              <hr />
              <Form.Range />
              <Button size="sm" variant="dark" className="mt-2">
                Filter
              </Button>
            </div>
          </Col>

          {/* PRODUCTS */}
          <Col lg={9} md={8}>
            {/* TOP BAR */}
            <div className="d-flex justify-content-between mb-4">
              <small className="text-muted">
                Showing 1–9 of 65 results
              </small>
              <Form.Select size="sm" style={{ width: 200 }}>
                <option>Default Sorting</option>
              </Form.Select>
            </div>

            {/* GRID */}
            <Row className="g-4">
              {products.map((p) => (
                <Col key={p.id} xs={12} sm={6} lg={4}>
                  <div className="text-center position-relative border p-3 h-100">
                    {p.badge && (
                      <span className="badge bg-success position-absolute top-0 start-0 m-2">
                        {p.badge}
                      </span>
                    )}

                    <img
                      src={p.img}
                      alt={p.name}
                      className="img-fluid mb-3"
                    />

                    {/* ACTIONS */}
                    <div className="d-flex justify-content-center gap-2 mb-3">
                      <Button variant="outline-dark" size="sm">
                        <Cart />
                      </Button>
                      <Button variant="outline-dark" size="sm">
                        <Heart />
                      </Button>
                      <Button variant="outline-dark" size="sm">
                        <ArrowRepeat />
                      </Button>
                    </div>

                    <h6 className="fw-semibold">{p.name}</h6>
                    <p className="fw-bold">{p.price}</p>
                  </div>
                </Col>
              ))}
            </Row>

            {/* CHECKOUT BUTTON */}
            <div className="text-center mt-5">
              <Button size="lg" variant="dark">
                Proceed to Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
