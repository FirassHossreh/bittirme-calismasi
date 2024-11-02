import { createContext, useContext, useState } from "react";

const ToastContext = createContext({});
export default function ToastProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ToastContext.Provider value={{ open, setOpen }}>
        {children}
      </ToastContext.Provider>
    </>
  );
}
export const useToast = () => {
  return useContext(ToastContext);
};
