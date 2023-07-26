import Payment from "assets/payment.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Important</h2>
          <span>FAQS</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Disclaimer</span>
          <span>Refund & Returns</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio porro
            at harum aperiam ea ipsum nihil mollitia laboriosam quo quidem, nisi
            quasi corporis qui vero repudiandae reprehenderit incidunt dolor
            quam.
          </span>
        </div>
        <div className="item">
          <h2>Company</h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio porro
            at harum aperiam ea ipsum nihil mollitia laboriosam quo quidem, nisi
            quasi corporis qui vero repudiandae reprehenderit incidunt dolor
            quam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Reactecom</div>
          <div className="copyright">
            {" "}
            &nbsp; &copy; 2023, All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img src={Payment} alt="payment methods" />
        </div>
      </div>
    </div>
  );
}
