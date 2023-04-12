import React, { useState, useEffect } from "react";
import './Carrito.css'
import alertActions from "../../Store/Alert/actions";
import { useDispatch } from "react-redux";
const { open } = alertActions;

export default function Carrito() {
  let dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("carrito"));
    setCartItems(cartData || []);
  }, []);

  const handleDelete = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("carrito", JSON.stringify(updatedCartItems));
    let dataAlert = {
      icon: "success",
      title: "Removed product",
      type: "toast"
    };
    dispatch(open(dataAlert));
  };

  const handleClear = () => {
    setCartItems([]);
    localStorage.removeItem("carrito");
    let dataAlert = {
      icon: "success",
      title: "Removed All products",
      type: "toast"
    };
    dispatch(open(dataAlert));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="content-carrito">
      {cartItems.length > 0 ? (
        <div>
          <div className="sub-content-carrito">
            {cartItems.map((item, index) => {
              return (
                <div className="card-productos" key={index}>
                  <img src={item.cover_photo} alt="" />
                  <div className="card-text-productos">
                    <div
                      className="eliminar"
                      onClick={() => handleDelete(index)}
                    >
                      x
                    </div>

                    <div className="price-title">
                      <h2>{item.title}</h2>
                      <div className="price-cantidad">
                        <p className="card-price">${item.price}</p>
                        <p className="card-price">{item.stock}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="total-price">Total: ${totalPrice}</p>
          <div className="vaciar-comprar">
            <button className="vaciar" onClick={handleClear}>
              Remove
            </button>
            <button className="comprar">Buy</button>
          </div>

        </div>
      ) : (
        <p className="no-hay-productos">There are no products </p>
      )}
    </div>
  );
}
