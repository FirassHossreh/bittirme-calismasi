import HeaderForPages from "../../components/header-for-pages";
import CareerApplicationBox from "../../components/career-application-box/CareerApplicationBox";
import "./careerPage.css";

export default function Career() {
  return (
    <div className="career-page">
      <HeaderForPages>
        <h1 className="career-title">Geleceği Birlikte Şekillendirelim</h1>
      </HeaderForPages>
      <br />
      <CareerApplicationBox />
    </div>
  );
}
