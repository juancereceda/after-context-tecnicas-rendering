import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProducts } from "../../utils/functions";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((resp) => setProducts(resp))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <> {loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>
  );
};

export default ItemListContainer;
