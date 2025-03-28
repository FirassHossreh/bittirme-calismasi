export default function LayoutNavbar({ children }) {
  return (
    <div className="w-full h-16 border-b border-gray-300 flex items-center justify-between">
      {children}
    </div>
  );
}
