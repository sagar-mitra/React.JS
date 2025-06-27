import { createContext } from "react";

const UserContext = createContext ({
    userName : "default user",
    id: 112233,
    address: "Kolkata, IN"
})

export default UserContext;

// We can also use named export