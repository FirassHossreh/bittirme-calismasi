import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServicesBox({ icon, title, description }) {
  return (
    <>
      <div
        className="bg-white border-2 border-blue-600 rounded-2xl p-6 max-w-sm text-center shadow-md 
                    transform transition-all duration-700 ease-in-out 
                    hover:shadow-blue-200 hover:scale-105 w-80"
      >
        <div className="text-4xl text-blue-600 mb-4">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </>
  );
}
