import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import YourCart from "./components/YourCart";
import { Provider } from "react-redux";
import { persistor, store } from "./utils/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className=" flex flex-col  items-center justify-center space-y-[40px] p-3 lg:flex-row lg:h-screen lg:space-x-[40px] lg:space-y-0 ">
          <Product />
          <YourCart />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
