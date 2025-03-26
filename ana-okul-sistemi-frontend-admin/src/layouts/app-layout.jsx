import { extendTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { APP_NAVIGATION } from "../features/app-layout/constants/app-navigation";
import { APP_BRANDING } from "../features/app-layout/constants/app-branding";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const Theme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  return {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate,
  };
}
export default function AppLayout(props) {
  const router = useRouter("/");

  const [session, setSession] = useState({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });
  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider
      navigation={APP_NAVIGATION}
      theme={Theme}
      branding={APP_BRANDING}
      authentication={authentication}
      session={session}
      router={router}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}
