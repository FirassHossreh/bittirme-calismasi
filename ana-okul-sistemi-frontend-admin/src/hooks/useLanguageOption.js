import { useSelector } from "react-redux";

export default function useLanguageOption() {
  const languageOption = useSelector((state) => {
    return state.languageSliceReducer.languageOption;
  });

  return languageOption;
}
