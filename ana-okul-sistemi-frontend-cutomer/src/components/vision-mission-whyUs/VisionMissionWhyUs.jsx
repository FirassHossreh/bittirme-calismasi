import "./visionMissionWhyUs.css";

export default function VisionMissionWhyUs({
  title,
  description,
  classTitle,
  children,
}) {
  return (
    <>
      <div className={`box ${classTitle}`}>
        <div className="half-rect"></div>
        <div className="icon">{children}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
