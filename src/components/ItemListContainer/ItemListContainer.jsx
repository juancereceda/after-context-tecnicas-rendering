import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProducts } from "../../utils/functions";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((resp) => setProducts(resp))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
