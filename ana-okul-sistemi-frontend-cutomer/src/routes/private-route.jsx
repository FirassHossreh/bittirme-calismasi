import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticatedService } from "../services/auth/is-authenticated";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/isAuthenticatedSlice";
import { useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const [isauth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await isAuthenticatedService();
      if (response?.status === 200) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, [location.pathname]);

  const dispatch = useDispatch();
  const handleLogin = () => navigate("/login");
  const handleCancel = () => {
    dispatch(logout());
    navigate("/");
  };

  return isauth ? (
    <Outlet />
  ) : (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-11/12 max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Giriş Yapmanız Gerekiyor
        </h2>
        <p className="text-gray-600 mb-6">
          Bu sayfaya erişmek için lütfen giriş yapınız.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogin}
            className="bg-[#007BFF] text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Giriş Yap
          </button>
          <button
            onClick={handleCancel}
            className="border-2 border-[#007BFF] text-[#007BFF] px-5 py-2 rounded-lg font-medium hover:bg-[#007BFF] hover:text-white transition"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};
export default PrivateRoute;
