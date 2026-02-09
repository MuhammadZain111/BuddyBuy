import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { products } from "../../constants/slice";
import ProductCard from "./ProductCard";


function Products() {
  return (
    <>
     
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

          <Col lg={9} md={8}>
            <div className="d-flex justify-content-between mb-4">
              <small className="text-muted">
                Showing 1–9 of 65 results
              </small>
              <Form.Select size="sm" style={{ width: 200 }}>
                <option>Default Sorting</option>
              </Form.Select>
            </div>

            <Row className="g-4">
              
               {products.map((product, index) => (
                <div className="slider-item" key={index}>
                  <ProductCard product={product} />
                     </div>
                // <Col key={p.id} xs={12} sm={6} lg={4}>
                
                // </Col>
              ))}
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
