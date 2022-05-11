import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import Categories from "../Categories/Categories";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Brand />
      <Categories />
      <CartWidget />
    </div>
  );
};

export default NavBar;
