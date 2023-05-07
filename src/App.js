import "./styles/_variables.scss";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import GuardedRoute from "./services/RouteGuard";
import useAuth from "./services/AuthContext";

function App() {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <GuardedRoute
              isRouteAccessible={!token}
              redirectRoute={'/'}
            />
          }
        >
          {/* Login Route */}
          <Route path={'/login'} element={<Login />} />
        </Route>
        {/* Authenticated Routes */}
        <Route
          element={
            <GuardedRoute
              isRouteAccessible={token}
              redirectRoute={'/login'}
            />
          }
        >
          <Route path={'/'} element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
