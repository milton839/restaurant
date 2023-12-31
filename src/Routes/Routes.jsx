import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
])