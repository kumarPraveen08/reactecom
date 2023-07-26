import "./home.scss";
import Slider from "components/slider/Slider";
import FeaturedProducts from "components/featuredProducts/FeaturedProducts";
import Categories from "components/categories/Categories";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
}
