import { products } from "./products";

export const getProducts = (categoryId) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(
          categoryId
            ? products.filter((product) => product.category === categoryId)
            : products
        ),
      2000
    );
  });

export const getProductById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === Number(id)));
    }, 2000);
  });
