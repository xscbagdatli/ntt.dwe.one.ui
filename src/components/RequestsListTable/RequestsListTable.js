import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button, { Box, Chip, LinearProgress, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F6F9FA",
    color: theme.palette.common.black,
    fontWeight: "bold",
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  requestNo,
  expectedDeliveryDate,
  fat,
  statusId,
  progress,
) {
  return { requestNo, expectedDeliveryDate, fat, statusId, progress };
}

const rows = [
  createData('#7353967', "07/10/2023", "Elektronik", 1, 50),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 25),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 15),
  createData('#7353967', "07/10/2023", "Elektronik", 1, 35),
  createData('#7353967', "07/10/2023", "Elektronik", 1, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 1, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40),
];

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function RequestsListTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Talep No</StyledTableCell>
            <StyledTableCell align="right">Beklenen Teslim Tarihi</StyledTableCell>
            <StyledTableCell align="right">Talep Başlığı</StyledTableCell>
            <StyledTableCell align="right">Durum</StyledTableCell>
            <StyledTableCell align="right">Karşılanma Oranı</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.requestNo}>
              <StyledTableCell component="th" scope="row">
                {row.requestNo}
              </StyledTableCell>
              <StyledTableCell align="right">{row.expectedDeliveryDate}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{<Chip label={row.statusId === 1 ? "Tamamlandı" : row.statusId === 2 ? "Paylaşımda" : "Açık"} color={row.statusId === 1 ? "success" : row.statusId === 2 ? "warning" : "info"} />}</StyledTableCell>
              <StyledTableCell align="right">{<LinearProgressWithLabel value={row.progress} />}</StyledTableCell>
              <StyledTableCell align="right">
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#E1474A", borderRadius: "8px", width: "115px",
                  height: "32px",
                  cursor: "pointer",
                  color: "#FFFFFF"
                }}>
                  Detaya Git
                  <ArrowForwardIcon />
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}