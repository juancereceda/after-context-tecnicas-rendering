import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, quantity }]);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const deleteById = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const removeOneUnit = (id) => {
    if (unitsPerProduct(id) === 1) {
      return deleteById(id);
    }
    setCartList(
      cartList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const totalCount = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const unitsPerProduct = (id) => {
    const foundInCart = cartList.find((item) => item.id === id);
    return foundInCart ? foundInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        deleteById,
        totalCount,
        totalPrice,
        removeOneUnit,
        unitsPerProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

/* 
1 - lISTADO DE PRODUCTOS OK
2 - fc para agregar productos al carrito (logica de no repetir items) OK
3 - fc para vaciar el carrito OK
4 - fc para eliminar uno x uno OK
5 - fc para ver si ese item esta en el carrito OK
6 - fc para obtener el total de items OK
7 - fc para obtener el precio total OK
8 - fc para ver cuantas unidades de un producto tengo en el carrito
*/
