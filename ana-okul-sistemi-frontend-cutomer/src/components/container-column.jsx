export default function Container({ children }) {
  return (
    <>
      <div className="w-[70%] m-auto flex flex-col items-center">
        {children}
      </div>
    </>
  );
}
