export default function VMTBox({ title, description, spanbgc, children }) {
  return (
    <>
      <div
        className={`bg-white rounded-[20px] px-[20px] py-[30px] 
    flex-1 min-w-[280px] basis-[30%] text-center relative 
    shadow-md hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105`}
      >
        <span
          className={
            "absolute top-[20px] left-[20px] w-[20px] h-[20px] rounded-full"
          }
          style={{ backgroundColor: `${spanbgc}` }}
        ></span>
        <div className="text-[50px] mb-[15px]">{children}</div>
        <h2 className="text-[#007bff] text-[24px] mb-[15px] font-semibold">
          {title}
        </h2>
        <p className="text-[#333333] text-[16px] leading-[1.8] text-justify">
          {description}
        </p>
      </div>
    </>
  );
}
