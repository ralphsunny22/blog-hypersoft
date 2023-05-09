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
//import "./style.scss"
import Landing from "./pages/landing/Landing";
import SinglePost from "./pages/singlePost/SinglePost";
import CreatePost from "./pages/admin/posts/CreatePost";

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
        path:"/home",
        element: (<Home/>)

      },
      {
        path:"/",
        element: (<Landing/>)

      },
      {
        path:"/post/:id",
        element: (<SinglePost/>)
      },
      {
        path:"/admin/create-post",
        element: (<CreatePost/>)
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
