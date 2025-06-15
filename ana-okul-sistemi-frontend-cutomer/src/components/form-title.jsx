export default function FormTitle({ title }) {
  return (
    <>
      <div
        id="label"
        style={{
          color: "white",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          fontSize: "1.5rem",
          lineHeight: "2rem",
        }}
      >
        {title}
      </div>
    </>
  );
}
