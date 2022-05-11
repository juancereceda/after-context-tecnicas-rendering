import Error404 from "../../assets/error-404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={Error404} alt="Not found" className="not-found-img" />
      <h1 className="not-found-text">NotFound</h1>;
    </div>
  );
};

export default NotFound;
