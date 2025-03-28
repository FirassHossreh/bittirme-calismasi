import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function LayoutCategory({ title, children }) {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </>
  );
}
