import AppRouter from "./routes/AppRouter";
import "./GlobalStyles.css";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </>
  );
}

export default App;
