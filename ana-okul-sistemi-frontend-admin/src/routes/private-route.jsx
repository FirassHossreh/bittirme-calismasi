import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { IsAuthenticated } from "../services/is-authenticated";

const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await IsAuthenticated();
        if (response.status === 200) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error("Auth kontrolü hatası", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;
  else return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
