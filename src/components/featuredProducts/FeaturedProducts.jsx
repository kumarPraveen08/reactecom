import "./featuredProducts.scss";
import Card from "components/card/Card";
import { Products } from "_data";

export default function FeaturedProducts({ type }) {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi
          ab tempora veritatis illo iusto atque laudantium in, ex sapiente
          mollitia, optio minus voluptatibus? Eaque adipisci quidem provident,
          repudiandae sint tenetur cupiditate sequi tempora ratione inventore
          earum asperiores pariatur quos nihil delectus dicta perferendis quas!
          Repellat sint eius labore non.
        </p>
      </div>
      <div className="bottom">
        {Products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
