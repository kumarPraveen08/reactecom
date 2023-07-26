import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Contact() {
  const message = () => {
    toast.success("Thank you for subscribing.");
  };
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Stay connected with us:</span>
        <div className="email">
          <input type="email" placeholder="Your Email" />
          <button onClick={message}>Subscribe</button>
        </div>
        <div className="social">
          <Link to="/">
            <FacebookIcon fontSize="medium" />
          </Link>
          <Link to="/">
            <InstagramIcon fontSize="medium" />
          </Link>
          <Link to="/">
            <TwitterIcon fontSize="medium" />
          </Link>
          <Link to="/">
            <GoogleIcon fontSize="medium" />
          </Link>
          <Link to="/">
            <PinterestIcon fontSize="medium" />
          </Link>
        </div>
      </div>
    </div>
  );
}
