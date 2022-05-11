import { useState } from "react";

import { useCartContext } from "../../context/CartContextProvider";
import GoToCart from "../GoToCart/GoToCart";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { name, price, imgUrl, stock, id } = product;
  const [countToAdd, setCountToAdd] = useState(0);
  const { addToCart, unitsPerProduct } = useCartContext();

  const handleOnAdd = (count) => {
    if (count + unitsPerProduct(id) > stock) {
      const availableToAdd = stock - unitsPerProduct(id);
      return alert(`Solamente podes agregar ${availableToAdd} productos`);
    }
    setCountToAdd(count);
    addToCart(product, count);
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imgUrl} alt={name} className="card-img" />
      <h4>Precio: ${price}</h4>
      <h4>Stock: {stock} unidades</h4>
      {countToAdd === 0 ? (
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
      ) : (
        <GoToCart />
      )}
    </div>
  );
};

export default ItemDetail;
