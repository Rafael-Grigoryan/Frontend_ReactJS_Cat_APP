import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu/Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>NotFound</div>,
    children: [
      {
        path: ":id",
        element: <Navbar />,
      },
    ],
  },
  {
    path: "/menu",
    element: <Menu />
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
