import LayoutNavbar from "../features/app-layout/components/layout-navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, IconButton } from "@mui/material";
import LayoutLogo from "../features/app-layout/components/layout-logo";
import { Link } from "react-router-dom";
import LogoImg from "../assets/fanasan-logo.png";
import { PRIMARY_COLOR } from "../constants/colors";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PersonIcon from "@mui/icons-material/Person";
import LayoutSideBar from "../features/app-layout/components/layout-side-bar";
import LayoutCategoryTitle from "../features/app-layout/components/layout-category-title";
import LayoutCategory from "../features/app-layout/components/layout-category";
import LayoutCategoryDropDown from "../features/app-layout/components/layout-category-drop-down";
import { APP_NAVIGATION_COPY } from "../features/app-layout/constants/app-navigation-copy";
import LanguageSelector from "../components/language-selector";

export default function FirassLayout({ children }) {
  return (
    <>
      <LayoutNavbar>
        <div className="flex items-center">
          <div className="w-16 h-16  flex justify-center items-center">
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>
          <LayoutLogo>
            <Link
              to="/home"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <img src={LogoImg} alt="logo-img" className="w-10 h-10" />
              <h1 style={{ color: PRIMARY_COLOR }}>FANASAN</h1>
            </Link>
          </LayoutLogo>
        </div>
        <div className=" mr-4 flex gap-4 items-center">
          <LanguageSelector />
          <IconButton>
            <WbSunnyIcon />
          </IconButton>
          <IconButton>
            <PersonIcon />
          </IconButton>
        </div>
      </LayoutNavbar>
      <LayoutSideBar>
        {APP_NAVIGATION_COPY.map((element, index) => {
          return (
            <div key={index}>
              {element.kind !== undefined && element.title !== undefined ? (
                <LayoutCategoryTitle title={element.title} />
              ) : (
                ""
              )}
              {element.kind !== undefined && element.title === undefined ? (
                <Divider className="!m-2" />
              ) : (
                ""
              )}
              {element.segment !== undefined &&
              element.children === undefined ? (
                <LayoutCategory title={element.title}>
                  {element.icon}
                </LayoutCategory>
              ) : (
                ""
              )}
              {element.segment !== undefined &&
              element.children !== undefined ? (
                <LayoutCategoryDropDown title={element.title} />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </LayoutSideBar>
    </>
  );
}
