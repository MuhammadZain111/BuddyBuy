import React, { useState } from 'react';

import { useFav } from "../../CartContext";



const FavoritesPage = () => 
    {
   
      const { fav, removeFromFav, addToCart } = useFav();
  
      const  [ favItem,setFav ]=useState([]);

   

    const removeItem = (id) => {
      setFav(favItem.filter(item => item.id !== id));
    }

    return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold">Your Favorites</h2>
          <p className="text-muted">Items you've saved for later.</p>
        </div>
      </div>

      {fav.length > 0 ? (
        <div className="row g-4">
          {fav.map((item) => (
          
            <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="position-relative">
                  <img src={item.img} className="card-img-top p-3" alt={item.name} />
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="btn btn-light btn-sm position-absolute top-0 end-0 m-3 shadow-sm rounded-circle"
                    title="Remove from favorites"
                  >
                    ✕
                  </button>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title h6">{item.name}</h5>
                  <p className="card-text fw-bold text-primary">{item.price}</p>
                  <button onClick={()=>addToCart(item)}
                 className="btn btn-outline-dark mt-auto w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <h4 className="text-muted">Your wishlist is empty.</h4>

          <button className="btn btn-primary mt-3">Start Shopping</button>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;