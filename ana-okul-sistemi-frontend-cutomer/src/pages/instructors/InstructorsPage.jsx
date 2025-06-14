import EmployeeCard from "../../Modals/employee-card";
import photoOfKindergarten from "../../assets/photo-of-kindergarten/Screenshot 2025-02-22 202947.png";
import HeaderForPages from "../../components/header-for-pages";
import "./instructorsPage.css";
export default function InstructorsPage() {
  return (
    <>
      <HeaderForPages>
        <h1 className="instructors-title">Fanasan'inin Egitmenleri</h1>
      </HeaderForPages>
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
    </>
  );
}
