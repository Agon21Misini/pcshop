import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { productsCollection } from "../products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      const products = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      products.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });

      setProducts(productsArray);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout loading={loading} className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4">
              <div className="m-2 p-1 product position-relative">
                <div className="product-content">
                  <p>{product.name}</p>
                  <div className="text-center">
                    <img
                      src={product.imageURL}
                      alt={product.name}
                      className="product-img"
                    />
                  </div>
                </div>
                <div className="product-actions">
                  <h2>{product.price}0€</h2>
                  <h4>Sasia: {product.quantity}</h4>
                  <div className="d-flex">
                    <button
                      className="mx-2 btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        navigate(`/productinfo/${product.id}`);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default HomePage;
