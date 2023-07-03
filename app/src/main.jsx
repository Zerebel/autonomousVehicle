import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./Authentication/AuthContext.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import App from "./App.jsx";
import Profile from "./pages/profile.jsx";
import Contact from "./pages/contact.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
