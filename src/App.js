import AppRouter from "./routes/AppRouter";
import "./GlobalStyles.css";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <div>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </div>
  );
}

export default App;
