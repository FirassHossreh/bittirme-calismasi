import PuffLoader from "react-spinners/PuffLoader";
import "./loader.css";
export default function Loader() {
  return (
    <>
      <div className="loader">
        <PuffLoader color="#007bff" />
      </div>
    </>
  );
}
