import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/auth.context.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import {store} from "./rtk/store";


createRoot(document.getElementById("root")).render(
   <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </Provider>
  </StrictMode>
);

