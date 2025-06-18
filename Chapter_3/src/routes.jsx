import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import App from "./App.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Body from "./components/Body.jsx";
import Restaurants from "./components/Restaurants.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurants />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default appRouter;
