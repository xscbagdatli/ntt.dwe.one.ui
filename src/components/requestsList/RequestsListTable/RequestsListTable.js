import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Chip, LinearProgress, TableFooter, TablePagination, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

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
  title,
  statusId,
  progress,
) {
  return { requestNo, expectedDeliveryDate, title, statusId, progress };
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
  const { t } = useTranslation()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 700, minHeight: 440 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{t("RequestNo")}</StyledTableCell>
            <StyledTableCell align="right">{t("ExpectedDeliveryDate")}</StyledTableCell>
            <StyledTableCell align="right">{t("RequestTitle")}</StyledTableCell>
            <StyledTableCell align="right">{t("Status")}</StyledTableCell>
            <StyledTableCell align="right">{t("ProvidingRatio")}</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.requestNo}
              </StyledTableCell>
              <StyledTableCell align="right">{row.expectedDeliveryDate}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{<Chip label={row.statusId === 1 ? "Tamamlandı" : row.statusId === 2 ? "Paylaşımda" : "Açık"} color={row.statusId === 1 ? "success" : row.statusId === 2 ? "warning" : "info"} />}</StyledTableCell>
              <StyledTableCell align="right">{<LinearProgressWithLabel value={row.progress} />}</StyledTableCell>
              <StyledTableCell align="right">
                <Box component="a" href={`requests-list/request-detail/${index}`} style={{
                  display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#E1474A", borderRadius: "8px", width: "115px",
                  height: "32px",
                  cursor: "pointer",
                  color: "#FFFFFF"
                }}>
                  {t("GoToDetail")}
                  <ArrowForwardIcon />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {/* 
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={5}
            page={page}
            onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
          // ActionsComponent={TablePaginationActions}
          />

        </TableFooter>
      </Table>
    </TableContainer >
  );
}