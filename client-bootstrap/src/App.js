import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import Home from "./pages/Home";
import "./style.scss"
import Landing from "./pages/landing/Landing";

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout/>
    ),
    children: [
      {
        path:"/",
        element: (<Home/>)

      },
      {
        path:"/landing",
        element: (<Landing/>)

      },
      
    ]
  },
]);

function App() {
  return (
    <div className="app">
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
