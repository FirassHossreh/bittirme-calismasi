import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useToast } from "../../providers/ToastProvider";

export default function Toast({ status = "success", content }) {
  const { open, setOpen } = useToast();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={status}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {content}
        </Alert>
      </Snackbar>
    </div>
  );
}
