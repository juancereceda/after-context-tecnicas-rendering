import { NavLink } from "react-router-dom";

import CartLogo from "../../assets/shopping-cart.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <NavLink to="/cart">
      <img src={CartLogo} alt="cart" className="cart-logo" />
    </NavLink>
  );
};

export default CartWidget;
