import photoOfKindergarten from "../../assets/photo-of-kindergarten/Screenshot 2025-02-22 202947.png";
import ContainerColumn from "../../components/container-column/ContainerColumn";
import HeaderForPages from "../../components/header-for-pages/HeaderForPages";
import EmployeeCard from "../../Modals/employee-box/EmployeeBox";
import "./aboutUsPage.css";

export default function AboutPage() {
  return (
    <>
      <HeaderForPages>
        <h1 className="about-title">Fanasan Okuluna Hosgeldiniz</h1>
      </HeaderForPages>

      <ContainerColumn>
        <h3 className="who-are-we">Biz Kimiz ?</h3>
        <p className="who-are-we-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          optio iste dignissimos consequatur dolor corporis similique quia
          necessitatibus enim nobis minima est esse quod iure commodi
          accusantium, quibusdam dolores possimus? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quibusdam debitis qui consequatur
          quaerat dicta, maiores nostrum sit deserunt sed tenetur harum delectus
          laborum consectetur, dolorem dolor nam eveniet cumque aspernatur.
        </p>
      </ContainerColumn>
      <ContainerColumn>
        <div className="about-img-container">
          <img src={photoOfKindergarten} alt="hata" />
        </div>
      </ContainerColumn>
      <ContainerColumn>
        <h1 className="our-administrators">idarecilerimiz</h1>
        <div className="container-for-employees">
          <EmployeeCard
            name="firass"
            position={"hossreh"}
            image={photoOfKindergarten}
            email={"firass.hus@gmail.com"}
            gender={"male"}
          />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>
      </ContainerColumn>
    </>
  );
}
