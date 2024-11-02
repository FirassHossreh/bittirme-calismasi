import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import "./appLayout.css";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setLoadin } from "../../store/slices/LoadingSlice";
export default function AppLayout() {
  const loading = useSelector((state) => {
    return state.loadingReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadin(true));
    setTimeout(() => {
      dispatch(setLoadin(false));
    }, 2000);
  }, []);
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}
