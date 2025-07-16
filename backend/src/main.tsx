import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.tsx";
import { FirebaseProvider } from "./context/FirebaseContext.tsx";

import App from "./App.tsx";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </AuthProvider>
  </StrictMode>
);
