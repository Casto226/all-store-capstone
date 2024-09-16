import Product from "./Product";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import Jet from "./imgs/Jet.jpg";
import Door from "./imgs/Door.jpg";
import Smartphone from "./imgs/Smartphone.jpg";

//The product page contains all the items the user can by in the store.

//Each product has a unique ID, name, price, and photo.
const ProductPage = () => {
  const products = [
    { id: 1, name: "Jet", price: 999, image: Jet },
    { id: 2, name: "Door", price: 199, image: Door },
    { id: 3, name: "Smartphone", price: 599, image: Smartphone },
  ];

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  //Each product can be added to the cart to be bought, by simply clicking the addToCart button.
  return (
    <div className="container">
      <h2>Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
