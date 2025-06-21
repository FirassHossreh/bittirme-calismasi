import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./../components/footer";
import Header from "./../components/header";
import Loader from "./../components/loader";
import { setLoadin } from "./../store/slices/LoadingSlice";

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
        <main className="min-h-[50vh]">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}
