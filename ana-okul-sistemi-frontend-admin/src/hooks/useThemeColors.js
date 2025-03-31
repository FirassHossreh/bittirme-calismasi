import { useSelector } from "react-redux";
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_LIGHT_COLOR,
  SECONDARY_DARK_COLOR,
  SECONDARY_LIGHT_COLOR,
  TERTIARY_DARK_COLOR,
  TERTIARY_LIGHT_COLOR,
} from "../constants/colors";
export default function useThemeColors() {
  const themeOption = useSelector((state) => {
    return state.themeSliceReducer.themeOption;
  });
  const colors = {
    themeOption: themeOption,
    primaryColor:
      themeOption === "light" ? PRIMARY_LIGHT_COLOR : PRIMARY_DARK_COLOR,
    secondaryColor:
      themeOption === "light" ? SECONDARY_LIGHT_COLOR : SECONDARY_DARK_COLOR,
    tertiaryColor:
      themeOption === "light" ? TERTIARY_LIGHT_COLOR : TERTIARY_DARK_COLOR,
  };

  return colors;
}
