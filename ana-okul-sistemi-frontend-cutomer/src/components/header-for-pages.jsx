export default function HeaderForPages({ children }) {
  return (
    <>
      <div className="bg-[#007bff] w-full flex justify-center p-5 text-white text-[2.5rem] capitalize">
        {children}
      </div>
    </>
  );
}
