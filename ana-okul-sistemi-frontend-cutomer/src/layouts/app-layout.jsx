import { Outlet } from "react-router-dom";
import Footer from "./../components/footer";
import Header from "./../components/header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isAuthenticatedService } from "../services/auth/is-authenticated";
import { login, logout } from "../store/slices/isAuthenticatedSlice";
// import { useEffect } from "react";
// import { isAuthenticatedService } from "../services/auth/is-authenticated";
// import { login, logout } from "../store/slices/isAuthenticatedSlice";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "./../components/loader";
// import { setLoadin } from "./../store/slices/LoadingSlice";

export default function AppLayout() {
  // const loading = useSelector((state) => {
  //   return state.loadingReducer;
  // });
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setLoadin(true));
  //   setTimeout(() => {
  //     dispatch(setLoadin(false));
  //   }, 2000);
  // }, []);
  // if (loading) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  // } else {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      const response = await isAuthenticatedService();
      if (response?.status === 200) {
        dispatch(login());
      } else {
        dispatch(logout());
      }
    };

    checkAuth();
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="min-h-[50vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
// }
