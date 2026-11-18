import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </Provider>,
);
