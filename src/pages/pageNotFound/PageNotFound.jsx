import { useLocation, useNavigate } from "react-router-dom";
import "./pageNotFound.scss";

export default function PageNotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goback = () => {
    return navigate("/");
  };
  return (
    <div className="pageNotFound">
      <div className="container">
        <div className="status">404</div>
        <span className="error">Page Not Found</span>
        <span className="message">
          The requested URL {pathname} was not found on this server.
        </span>
        <button onClick={goback}>Go Back</button>
      </div>
    </div>
  );
}
