import "./containerColumn.css";
export default function Container({ children }) {
  return (
    <>
      <div className="container-column">{children}</div>
    </>
  );
}
