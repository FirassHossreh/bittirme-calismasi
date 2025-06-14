import photoOfKindergarten from "./../assets/photo-of-kindergarten/Screenshot 2025-02-22 202947.png";
import ContainerColumn from "./../components/container-column";
import HeaderForPages from "./../components/header-for-pages";
import EmployeeCard from "../Modals/employee-card";

export default function About() {
  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">
          Fanasan Okuluna Hosgeldiniz
        </h1>
      </HeaderForPages>
      <ContainerColumn>
        <h3 className="text-3xl text-[#007bff] bg-white my-10">Biz Kimiz ?</h3>
        <p className="text-xl text-[#374151] bg-white text-center mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          optio iste dignissimos consequatur dolor corporis similique quia
          necessitatibus enim nobis minima est esse quod iure commodi
          accusantium, quibusdam dolores possimus? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quibusdam debitis qui consequatur
          quaerat dicta, maiores nostrum sit deserunt sed tenetur harum delectus
          laborum consectetur, dolorem dolor nam eveniet cumque aspernatur.
        </p>
        <div className="w-[20rem] overflow-hidden rounded-[0.625rem] mb-10 xl:w-[40rem] lg:w-[40rem] 2xl:w-[40rem] ">
          <img
            src={photoOfKindergarten}
            alt="hakkimizda-hata"
            className="w-full transition duration-[750ms] hover:scale-[1.3]"
          />
        </div>
        <h1 className="text-[#007bff] uppercase my-10">idarecilerimiz</h1>
        <div className="w-full flex flex-wrap gap-[3.125rem] justify-center mt-10">
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
