import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ product }) => {
  const { id, name, price, imgUrl } = product;
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imgUrl} alt={name} className="card-img" />
      <h4>Precio: ${price}</h4>
      <Link to={`/product/${id}`}>
        <button className="btn-detail">Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;
