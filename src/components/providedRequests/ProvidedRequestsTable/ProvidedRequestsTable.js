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
import { formatDate } from '../../../helpers/formatDate.js';

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

export default function ProvidedRequestsTable({
  item
}) {

  const { t } = useTranslation()

  const requirementWithId = useSelector((state) => state.requestsList.requirementWithId)

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
          <StyledTableRow>
            <StyledTableCell align="right">{formatDate(requirementWithId?.plannedDeliveryDate)}</StyledTableCell>
            <StyledTableCell align="right">{t(item?.product.productGroup.code)}</StyledTableCell>
            <StyledTableCell align="right">{item?.product.unitPrice + " " + item?.product.currency.code}</StyledTableCell>
            <StyledTableCell align="right">{item?.quantity}</StyledTableCell>
            <StyledTableCell align="right">{t(item?.product.unitOfMeasure.code)}</StyledTableCell>
            <StyledTableCell align="right">{t(item?.product.productType.code)}</StyledTableCell>
            <StyledTableCell align="right">{t(item?.splitProfileStatus.code)}</StyledTableCell>
            <StyledTableCell align="right">{t(requirementWithId?.deliveryType.code)}</StyledTableCell>
            <StyledTableCell align="right"
              style={{ textTransform: "capitalize" }}
            >{item?.product.businessPartner.name.toLowerCase()}</StyledTableCell>
            <StyledTableCell align="right">{(item?.isSpecial ? t("Yes") : t("No"))}</StyledTableCell>
            <StyledTableCell align="right">{item?.url}</StyledTableCell>
          </StyledTableRow>
          {/* 
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        {/* <TableFooter>
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

        </TableFooter> */}
      </Table>
    </TableContainer >
  );
}