import { useCartContext } from "../../context/CartContextProvider";
import { useDarkModeContext } from "../../context/DarkModeContextProvider";
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import Categories from "../Categories/Categories";
import "./NavBar.css";

const NavBar = () => {
  const { totalCount } = useCartContext();
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <div className="nav-container">
      <Brand />
      <Categories />
      <button onClick={() => toggleDarkMode()}>
        {darkMode ? "Desactivar" : "Activar"} modo oscuro
      </button>
      {totalCount() > 0 && <CartWidget />}
    </div>
  );
};

export default NavBar;

/* 
  true && true
  true && false
  false && true
  false && false

  true || true
  true || false
  false || true
  false || false


  
*/
