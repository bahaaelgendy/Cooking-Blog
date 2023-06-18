import App from "../App";
import Home from "../pages/home/Home";
import Recipe from './../pages/recipe/Recipe';
import Create from './../pages/create/Create';
import Search from "../pages/search/Search";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/create',
                element: <Create />
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/recipe/:id',
                element: <Recipe />
            },

        ]
    }

])