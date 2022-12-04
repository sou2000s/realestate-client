const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");
const { default: Home } = require("../Pages/Home");

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {path:"/", element: <Home/>}
        ]
    }
])


export default routes;