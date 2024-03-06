import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../store/slices/userSlice";

const store = configureStore({
  reducer: { user: userReducer },
});

export { store };

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
