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
import {
  tableHeadCategories
} from "../provided-requests-data.js"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F43443",
    color: "#FFF",
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

export default function ProvidedRequestsTable() {
  const { t } = useTranslation()
  const createProductObjectBody = useSelector((state) => state.createRequest.createProductObjectBody)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(2)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
      <Table sx={{ maxWidth: '100%', minHeight: 300, padding: "15px" }} stickyHeader>
        <TableHead>
          <TableRow>
            {
              tableHeadCategories.map(category => (
                <StyledTableCell key={category.id} align="right">{t(category.title)}</StyledTableCell>
              ))

            }
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? createProductObjectBody?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : createProductObjectBody
          ).map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="right">{row.expectedDeliveryDate}</StyledTableCell>
              <StyledTableCell align="right">{row.productname}</StyledTableCell>
              <StyledTableCell align="right">{row?.productCategory}</StyledTableCell>
              <StyledTableCell align="right">{row?.productSubCategory}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{t(row.measureUnit)}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.priceUnit}</StyledTableCell>
              <StyledTableCell align="right">{row.purchaseType}</StyledTableCell>
              <StyledTableCell align="right">{row.providingType}</StyledTableCell>
              <StyledTableCell align="right">{t(row.deliveryType)}</StyledTableCell>
              <StyledTableCell align="right">{row.deliveryCompany}</StyledTableCell>
              <StyledTableCell align="right">{(row.isSpecialProduct ? t("Yes") : t("No"))}</StyledTableCell>
              <StyledTableCell align="right">{row.productUrl}</StyledTableCell>
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
            count={createProductObjectBody?.length}
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