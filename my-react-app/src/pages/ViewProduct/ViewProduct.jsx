import React from "react";
import { Heart } from "lucide-react";
import { products } from "../../constants/slice";
import { useParams } from "react-router-dom";
import { useCart } from "../../CartContext";



const ViewProduct = () => {

    const { addToCart } = useCart();

  const { id } = useParams();


    const { cart, updateQty, removeFromCart } = useCart();
  

  const product = products.find(item => item.id === Number(id)
  );

    const cartItem = cart.find((item) => item.id === product.id);


     const quantity = cartItem ? cartItem.quantity : 1;




  if (!product) {
    product = products.find((item) => item.id === Number(id));
  }

  if (!product) {
    return <h2 className="text-center">Product not found</h2>;
  }

  return (
    <div className="container-fluid p-0">
    
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "300px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white  bg-opacity-50 p-4 rounded">
          <h1 className="display-4 fw-bold">Product Details</h1>
          <p className="small mt-2">Welcome to product detail section</p>
        </div>
      </div>


      <div className="container py-5">
        <div className="row g-4">

         

          <div className="col-md-6 d-flex align-items-center justify-content-center bg-light rounded p-4">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>

     
          <div className="col-md-6">
            <span className="badge bg-warning text-dark mb-3">Construction</span>

            <div className="d-flex align-items-center mt-2 mb-3">
              <div className="text-warning fs-5 me-2">★ ★ ★</div>
              <small className="text-muted">10 Reviews</small>
            </div>

            <h2 className="fw-semibold">{product.name}</h2>
          
            <p className="fs-2 fw-bold mt-3">${product.price * quantity}</p>

            <p className="text-muted mt-3">
              A stylish accent chair that serves as a statement piece in any room.
            </p>

            <div className="d-flex align-items-center gap-3 mt-4">
            
             <div className="input-group" style={{ width: "120px" }}>
             <button onClick={() => updateQty(product.id, -1)} className="btn btn-outline-secondary">−</button>
              <span className="mx-3" >{quantity}</span>
               
                <button onClick={() => updateQty(product.id, 1)} className="btn btn-outline-secondary">+</button>
              </div>

              
              <button onClick={() => addToCart(product)}  className="btn btn-warning text-white px-4 bg-black ">
                ADD TO CART
              </button>

            
              <button className="btn btn-outline-secondary">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
