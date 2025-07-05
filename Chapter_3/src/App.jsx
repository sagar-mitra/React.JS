import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import AppLayout from "./components/AppLayout";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // By an api call we are getting the useName, but here I use dummy data,
    const data = {
      user: "Sagar Mitra",
    };

    setUserName(data.user);
  }, []);

  return (
    <>
      {/* provider for redux store */}
      <Provider store={appStore}>
        {/* provider for context */}
        <UserContext.Provider value={{ userName: userName }}>
          <AppLayout />
        </UserContext.Provider>
      </Provider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
