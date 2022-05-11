import { NavLink } from "react-router-dom";

import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <NavLink to="/">
        <h1>Products</h1>
      </NavLink>
      <NavLink to="/products/shirts">
        <h1>Camisetas</h1>
      </NavLink>
      <NavLink to="/products/shorts">
        <h1>Pantalones</h1>
      </NavLink>
    </div>
  );
};

export default Categories;
