// Package Import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Project Import
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import AppLayout from "./utils/layouts/AppLayout";
import { ThemeProvider } from "./utils/contexts/ThemeContext";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ThemeProvider>
          <AppLayout />
        </ThemeProvider>
      ),
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
