import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import { products } from "../../constants/slice";
import ProductCard from "../Products/ProductCard";
import "./product.css";

function FeaturedProducts() {
  const sliderRef = useRef(null);

  const handleRight = () => {
    const card = sliderRef.current.querySelector(".slider-item");
    if (card) {
      sliderRef.current.scrollBy({ left: card.offsetWidth + 16, behavior: "smooth" });
    }
  };

  const handleLeft = () => {
    const card = sliderRef.current.querySelector(".slider-item");
    if (card) {
      sliderRef.current.scrollBy({ left: -(card.offsetWidth + 16), behavior: "smooth" });
    }
  };

  return (
    <section className="slider-container py-5">
      <div className="container">
        <h1 className="text-center seller-hd fs-1">BEST SELLER</h1>
        <p className="text-center seller-desc">EXCEPTEUR SINT OCCAECAT</p>

        <div className="slider-wrapper position-relative">
          <button className="slider-btn left" onClick={handleLeft}>‹</button>

          <div className="slider-viewport" ref={sliderRef}>
            <div className="slider-track">
              {products.map((product, index) => (
                <div className="slider-item" key={index}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn right" onClick={handleRight}>›</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
