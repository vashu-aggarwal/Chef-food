import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contactus from "./components/Contactus";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
// import Usercontext from "./Utils/Usercontext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const AppLayout = () => {
    const [userName, setUserName] = useState(''); // Initialize with an empty string or a default value

    useEffect(() => {
        const data = {
            name: 'vashu' // Use a string for the name
        };
        setUserName(data.name);
    }, []);

    return (
    <Provider store={appStore}>
        {/* <Usercontext.Provider value={{ logginguser: userName }}> */}
            <div className="app">
                <Header />
                <Outlet />
                <Footer/>
                <ToastContainer /> {/* Toaste notifications */}
            </div>
        {/* </Usercontext.Provider> */}
     </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact", // Fixed the case from "Contact" to "contact"
                element: <Contactus />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement: <ErrorElement />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
