import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/MainPage";
import Navigator from "./navigation/Navigator.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../src/redux/store";

function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
