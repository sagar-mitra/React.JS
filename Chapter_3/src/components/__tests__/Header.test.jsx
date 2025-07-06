import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";

it("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // more specific button with "Login", when you have more than one button 
  const loginButton = screen.getByRole("button", {name: "Login"});

  expect(loginButton).toBeInTheDocument()
});

it("should render header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/); // this is regex it will just match the text 

  expect(cartItem).toBeInTheDocument()
});

it("should change login text with logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


  const loginButton = screen.getByRole("button", {name: "Login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name: "Logout"})

  expect(logoutButton).toBeInTheDocument()
});



/* 💡NOTE:

        - The component you want to test if that component used data from redux store and also used <Link> tag from react-router,
        then we have to wrapped the component with:

                - <Provider> - for using redux
                - <BrowserRouter> - for using react-router
*/