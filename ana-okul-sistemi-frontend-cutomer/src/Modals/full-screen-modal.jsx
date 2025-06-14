import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FullScreenModal({
  title,
  content,
  bgColor,
  color,
  descriptionColor,
}) {
  return (
    <>
      <div
        className="w-full flex p-5 flex-col items-center h-auto"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <h1 className="mt-5">{title}</h1>
        <div className="mt-10 flex flex-wrap justify-around w-full">
          {content.map((element, index) => {
            return (
              <div
                className="w-80 flex flex-col items-center gap-5 my-4"
                key={index}
              >
                <div className="text-[3.125rem]">
                  <FontAwesomeIcon icon={element.icon} size="2x" />
                </div>
                <h3 className="text-center">{element.title}</h3>
                <p style={{ color: descriptionColor }} className="text-center">
                  {element.subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
