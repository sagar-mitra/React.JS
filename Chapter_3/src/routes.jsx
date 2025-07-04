import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import App from "./App.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Body from "./components/Body.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Cart from "./components/Cart.jsx";
// import Grocery from "./components/Grocery.jsx";

// Chunking or Code Splitting
const Grocery = lazy(() => import("./components/Grocery.jsx"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurants />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default appRouter;
