import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/signin",
        Component: SignIn
      }
    ],
  },
]);
