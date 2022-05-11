import { NavLink } from "react-router-dom";

import CartLogo from "../../assets/shopping-cart.png";
import { useCartContext } from "../../context/CartContextProvider";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalCount } = useCartContext();
  return (
    <NavLink to="/cart">
      <img src={CartLogo} alt="cart" className="cart-logo" />
      <span className="units">{totalCount()}</span>
    </NavLink>
  );
};

export default CartWidget;
