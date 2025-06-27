import { useEffect, useState } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";
import UserContext from "./utils/UserContext";

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
      <UserContext.Provider value={{ userName: userName }}>
        <AppLayout />
      </UserContext.Provider>
    </>
  );
}

export default App;
