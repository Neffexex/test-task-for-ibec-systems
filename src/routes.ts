import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";


export const routes = [
    {
        exact: true,
        title: "Home",
        path: "/",
        component: Home
    },
    {
        exact: true,
        title: "About us",
        path: "/about",
        component: AboutUs
    },
    {
        exact: true,
        title: "Contacts",
        path: "/contacts",
        component: Contacts
    },
]
