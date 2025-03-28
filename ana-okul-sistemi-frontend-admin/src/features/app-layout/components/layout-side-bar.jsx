export default function LayoutSideBar({ children }) {
  return (
    <>
      <div className=" w-80 h-screen border-r border-gray-300 flex flex-col p-1">
        {children}
      </div>
    </>
  );
}
