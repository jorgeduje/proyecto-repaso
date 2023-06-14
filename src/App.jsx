import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Login from "./components/pages/login/Login";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
              <Route path={path} key={id} element={<Element />} />
            ))}
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
