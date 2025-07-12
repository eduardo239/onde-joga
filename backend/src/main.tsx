import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { FirebaseProvider } from "./context/FirebaseContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </FirebaseProvider>
  </StrictMode>
);
