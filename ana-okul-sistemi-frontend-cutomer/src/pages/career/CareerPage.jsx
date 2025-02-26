import { Button } from "@mui/material";
import HeaderForPages from "../../components/header-for-pages/HeaderForPages";
import "./careerPage.css";
import CareerApplicationBox from "../../components/career-application-box/CareerApplicationBox";
import ContainerConlumn from "../../components/container-column/ContainerColumn";
export default function Career() {
  return (
    <>
      <HeaderForPages>
        <h1 className="career-title">Geleceği Birlikte Şekillendirelim</h1>
      </HeaderForPages>
      {/* <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#007bff" }}
      >
        Large
      </Button> */}
      <br />
      <CareerApplicationBox />
      <ContainerConlumn>
        <h3 className="hr-policies-title">insan kaynaklar politikamiz</h3>
        <h5>Eşitlik ve Adalet</h5>
        <p className="hr-policy-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ipsa
          modi, provident excepturi facere dolor quia soluta magni porro nostrum
          fugit dolores iste amet fuga deleniti nemo minima, consectetur est.
        </p>
      </ContainerConlumn>
    </>
  );
}
