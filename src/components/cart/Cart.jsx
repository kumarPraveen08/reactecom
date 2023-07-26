import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Cart() {
  const Products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product one",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ab, error ea sint voluptate debitis quaerat itaque odit perspiciatis illum quam laborum eligendi aliquid aspernatur minus sapiente necessitatibus fuga corporis magni molestiae neque autem molestias?",
      oldPrice: 19,
      price: 10,
      isNew: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product two",
      desc: "Itaque laudantium, accusamus nisi soluta distinctio blanditiis nihil dicta porro necessitatibus hic inventore accusantium aliquid.",
      oldPrice: 29,
      price: 19,
      isNew: true,
    },
  ];

  return (
    <div className="cart">
      {Products.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.name} />
          <div className="details">
            <span>{item.name}</span>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x $99</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$199</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}
