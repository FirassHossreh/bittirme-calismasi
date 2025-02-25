import "./EmptyBackBox.css";
export default function EmptyBackBox({
  title,
  description,
  descriptionColor,
  children,
}) {
  return (
    <>
      <div className="empty-back-box">
        <div className="icon">{children}</div>
        <h3>{title}</h3>
        <p style={{ color: descriptionColor }}>{description}</p>
      </div>
    </>
  );
}
