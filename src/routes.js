
import {createBrowserRouter} from "react-router-dom";
import LogIn from "./components/LogIn";
import App from "./App";
import SignUp from "./components/SignUp";


const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LogIn />
    },
    {
        path: "/signup",
        element: <SignUp/>
    }
]);

export default MyRouter