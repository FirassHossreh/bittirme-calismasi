import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fullScreenModal.css";
import EmptyBackBox from "../empty-back-box/EmptyBackBox";
export default function FullScreenModal({
  title,
  icons,
  titles,
  subTitles,
  bgColor,
  color,
  descriptionColor,
}) {
  return (
    <>
      <div
        className="full-screen-modal"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <h1>{title}</h1>
        <div className="full-screen-modal-container">
          <EmptyBackBox
            title={titles[0]}
            description={subTitles[0]}
            descriptionColor={descriptionColor}
          >
            <FontAwesomeIcon icon={icons[0]} size="2x" />
          </EmptyBackBox>
          <EmptyBackBox
            title={titles[1]}
            description={subTitles[1]}
            descriptionColor={descriptionColor}
          >
            <FontAwesomeIcon icon={icons[1]} size="2x" />
          </EmptyBackBox>
          <EmptyBackBox
            title={titles[2]}
            description={subTitles[2]}
            descriptionColor={descriptionColor}
          >
            <FontAwesomeIcon icon={icons[2]} size="2x" />
          </EmptyBackBox>
        </div>
      </div>
    </>
  );
}
