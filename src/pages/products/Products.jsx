import { useState } from "react";
import "./products.scss";
import List from "components/list/List";
import { useParams } from "react-router-dom";

export default function Products() {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  return (
    <div className="products">
      <div className="left">
        <div className="filters">
          <div className="filterItem">
            <h2>Filter by Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">one</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">two</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3">three</label>
            </div>
          </div>
          <div className="filterItem">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sory By</h2>
            <div className="inputItem">
              <input type="radio" id="asc" value={"asc"} name="price" />
              <label htmlFor="asc">asc</label>
            </div>
            <div className="inputItem">
              <input type="radio" id="desc" value={"desc"} name="price" />
              <label htmlFor="desc">desc</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="category">
          <img
            src="https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="category"
          />
          <span>Category one</span>
        </div>
        <div className="products">
          <List catId={catId} maxPrice={maxPrice} sort={"sort"} />
        </div>
      </div>
    </div>
  );
}
