import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Custom.css";







import { MP_01,MP_02, MP_03,MP_04 } from '../../assets/images';

function MainProducts() {
  return (
    <div className="cards container-fluid px-2 px-lg-5">
      <div className="row justify-content-evenly align-items-center gy-4">

        {/* Card 1 */}
        <div className="col-12 col-md-5">
          <div
            className="card h-100 p-4 d-flex flex-row align-items-center justify-content-between overflow-hidden"
            style={{ backgroundColor: "#efefef" }}
          >
            <div className="d-flex flex-column gap-3">
              <h2 className="fs-5 fw-bold text-nowrap" style={{ color: "#B18B5E" }}>
                GET 20% OFF
              </h2>
              <h1 className="fs-4 fw-semibold">Leather Recliner</h1>

              <a href="/leather-recliner" className="text-decoration-none" >
                <button
                  className="btn text-white px-4 py-3 fs-5 d-flex align-items-center gap-1"
                  style={{ backgroundColor: "gray" }}
                >
                  Buy Now
                  <svg width="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF">
                    <path
                      d="M10 7L15 12L10 17"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>

            <div style={{ width: "320px" }}>
              <img src={MP_01} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-5">
          <div
            className="card h-100 p-4 d-flex flex-row align-items-center justify-content-between overflow-hidden"
            style={{ backgroundColor: "#efefef" }}
          >
            <div className="d-flex flex-column gap-3">
              <h2 className="fs-5 fw-bold text-nowrap" style={{ color: "gray" }}>
                GET 20% OFF
              </h2>
              <h1 className="fs-4 fw-semibold">Wall Shelf</h1>

              <a href="/wall-shelf" className="text-decoration-none"  >
                <button
                  className="btn text-white px-2 py-3 fs-5 d-flex align-items-center gap-1"
                  style={{ backgroundColor: "gray" }}
                >Buy Now
                  <svg width="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF">
                    <path
                      d="M10 7L15 12L10 17"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>

            <div style={{ width: "320px" , margin: "10px"}}>
              <img src={MP_04} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainProducts;
