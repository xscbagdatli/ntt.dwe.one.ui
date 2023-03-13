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
import {
  tableHeadCategories
} from "../create-request-data.js"
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
  a,
  b,
  c,
  d,
  e,
  f,
  g,
) {
  return { requestNo, expectedDeliveryDate, title, statusId, progress, a, b, c, d, e, f, g };
}

const rows = [
  createData('#7353967', "07/10/2023", "Elektronik", 1, 50, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 25, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 15, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 1, 35, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 1, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 1, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 3, 40, 1, 2, 3, 4, 5, 6, 7),
  createData('#7353967', "07/10/2023", "Elektronik", 2, 40, 1, 2, 3, 4, 5, 6, 7),
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

export default function CreateRequestTable() {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(2)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '1024px' }}>
      <Table sx={{ maxWidth: '100%', minHeight: 440, padding: "15px" }} stickyHeader>
        <TableHead>
          <TableRow>
            {
              tableHeadCategories.map(category => (
                <StyledTableCell align="right">{t(category.title)}</StyledTableCell>
              ))

            }
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.requestNo}
              </StyledTableCell>
              <StyledTableCell align="right">{row.expectedDeliveryDate}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
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
              <StyledTableCell component="th" scope="row">
                {row.a}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.b}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.c}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.d}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.e}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.f}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.g}
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
            rowsPerPage={2}
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