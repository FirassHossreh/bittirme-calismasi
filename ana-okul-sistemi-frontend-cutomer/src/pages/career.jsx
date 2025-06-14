import HeaderForPages from "./../components/header-for-pages";
import CareerApplicationBox from "../Modals/career-application-box";

export default function Career() {
  return (
    <div className="h-[100vh]">
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">
          Geleceği Birlikte Şekillendirelim
        </h1>
      </HeaderForPages>
      <br />
      <CareerApplicationBox />
      <CareerApplicationBox />
    </div>
  );
}
