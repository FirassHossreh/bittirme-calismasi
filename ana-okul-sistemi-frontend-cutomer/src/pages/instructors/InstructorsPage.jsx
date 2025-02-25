import EmployeeCard from "../../Modals/employee-box/EmployeeBox";
import photoOfKindergarten from "../../assets/photo-of-kindergarten/Screenshot 2025-02-22 202947.png";
import "./instructorsPage.css";
export default function InstructorsPage() {
  return (
    <>
      <div className="instructors-title">
        <h1>Fanasan'inin Egitmenleri</h1>
      </div>
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
