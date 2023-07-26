import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
          {item.isNew && <span>New Arrival</span>}
          <img src={item.img} alt={item.title} className="firstImg" />
          {item?.img2 && (
            <img src={item?.img2} alt={item.title} className="secondImg" />
          )}
        </div>
        <h2>{item.title}</h2>
        <div className="price">
          <span className="oldPrice">${item.oldPrice}</span>
          <span className="newPrice">${item.price}</span>
        </div>
      </div>
    </Link>
  );
}
