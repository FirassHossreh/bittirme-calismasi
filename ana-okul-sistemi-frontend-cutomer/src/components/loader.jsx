import PuffLoader from "react-spinners/PuffLoader";
export default function Loader() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <PuffLoader color="#007bff" />
      </div>
    </>
  );
}
