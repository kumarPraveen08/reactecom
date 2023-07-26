import "./product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import FeaturedProducts from "components/featuredProducts/FeaturedProducts";

export default function Product() {
  const productImages = [
    "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [mainImg, setMainImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={productImages[0]} alt="" onClick={() => setMainImg(0)} />
            <img src={productImages[1]} alt="" onClick={() => setMainImg(1)} />
            <img src={productImages[2]} alt="" onClick={() => setMainImg(2)} />
          </div>
          <div className="mainImage">
            <img src={productImages[mainImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Product One</h1>
          <div className="price">
            <span className="oldPrice">$199</span>
            <span className="salePrice">$99</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            adipisci, suscipit quo cum beatae saepe dolorem necessitatibus odio
            eius, assumenda labore quaerat, autem rem corporis enim consequuntur
            officia nihil ipsa exercitationem obcaecati! Molestias numquam aut
            quasi. Quae itaque, ab architecto animi inventore, eaque laborum
            eos, dolore optio ea illo consequatur.
          </p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO FAVORITES
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Ivyadu</span>
            <span>Product Type: Shoes</span>
            <span>Tags: Snickers, Shoes, Sports</span>
          </div>
          <hr />
          <div className="info">
            <span>Description</span>
            <hr />
            <span>Additional Information</span>
            <hr />
            <span>FAQS</span>
          </div>
        </div>
      </div>
      <FeaturedProducts type="related" />
    </>
  );
}
