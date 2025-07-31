import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./utils/contexts/ThemeContext";

function App() {
  const AppLayout = () => {
    return (
      <>
        <ThemeProvider>
          <Header />
          <Outlet />
        </ThemeProvider>
      </>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
