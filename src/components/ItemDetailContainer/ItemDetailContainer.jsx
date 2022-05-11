import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/functions";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getProductById(id)
      .then((resp) => setProduct(resp))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="detail-container">
      {loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
