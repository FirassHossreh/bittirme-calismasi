import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const styleforFirstRow = {
  color: "white",
  fontWeight: "bold",
  borderRight: "1px solid white",
  textAlign: "center",
};
const styleForSecondRow = {
  color: "#374151",
  fontWeight: "bold",
  textAlign: "center",
  wordWrap: "break-word",
  whiteSpace: "normal",
  height: "auto",
};
export default function CareerApplicationBox({ children, jobPost }) {
  const rows = [
    {
      position: jobPost.jobTitle,
      date: jobPost.createdAt.split("T")[0],
      location: jobPost.location,
      status: jobPost.status ? "Açık" : "Doldu",
      details: "Application detail",
      apply: "Başvur",
    },
  ];
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: "80%", margin: "0 auto 40px auto" }}
      >
        <Table sx={{ tableLayout: "fixed", width: "100%" }}>
          <TableBody>
            <TableRow sx={{ backgroundColor: "#007bff", textAlign: "center" }}>
              <TableCell style={styleforFirstRow} colSpan={2}>
                Pozisyon
              </TableCell>
              <TableCell style={styleforFirstRow}>Açılma Tarihi</TableCell>
              <TableCell style={styleforFirstRow}>Konum</TableCell>
              <TableCell style={styleforFirstRow}>Durum</TableCell>
              <TableCell style={styleforFirstRow}>Basvuru detayi</TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Başvuru
              </TableCell>
            </TableRow>

            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  style={styleForSecondRow}
                  title={row.position}
                  colSpan={2}
                >
                  {row.position}
                </TableCell>
                <TableCell style={styleForSecondRow}>{row.date}</TableCell>
                <TableCell style={styleForSecondRow}>{row.location}</TableCell>
                <TableCell style={styleForSecondRow}>{row.status}</TableCell>
                <TableCell style={styleForSecondRow}>
                  <Link to={`career-application-details/${jobPost._id}`}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#007bff" }}
                    >
                      incele
                    </Button>
                  </Link>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <Link to={`career-application/${jobPost._id}`}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#007bff" }}
                    >
                      Basvur
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
