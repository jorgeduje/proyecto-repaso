import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import CartContextProvider from "./context/CartContext";
import Login from "./components/pages/login/Login";
import Layout from "./components/layout/Layout";
import DarkContextProvider from "./context/DarkContext";
import LoginFormik from "./components/pages/login/LoginFormik";
import { ThemeProvider } from "@emotion/react";
import { themeCustom } from "./themeConfig";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={ themeCustom }>
        <CartContextProvider>
          <DarkContextProvider>
            <Routes>
              <Route element={<Layout />}>
                {routes.map(({ id, path, Element }) => (
                  <Route path={path} key={id} element={<Element />} />
                ))}
              </Route>

              <Route path="/login" element={<LoginFormik />} />
              <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
          </DarkContextProvider>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
