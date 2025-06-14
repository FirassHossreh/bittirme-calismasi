import EmployeeCard from "./../Modals/employee-card";
import photoOfKindergarten from "./../assets/photo-of-kindergarten/Screenshot 2025-02-22 202947.png";
import HeaderForPages from "./../components/header-for-pages";
export default function Instructors() {
  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">
          Fanasan'inin Egitmenleri
        </h1>
      </HeaderForPages>
      <div className="w-[70%] mx-auto flex flex-wrap gap-[3.125rem] my-10 justify-center">
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
