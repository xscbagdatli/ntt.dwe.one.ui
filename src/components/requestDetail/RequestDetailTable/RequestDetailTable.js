import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress, Link, TableFooter, TablePagination, Typography } from '@mui/material';
import {
  tableHeadCategories
} from "../request-detail-data"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import LinkIcon from '@mui/icons-material/Link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F5F5F5",
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",

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

export default function RequestDetailTable() {
  const { t } = useTranslation()

  const requirements = useSelector((state) => state.requestsList.requirements)
  const selectedRequestIndex = useSelector((state) => state.requestsList.selectedRequestIndex)

  const selectedRequestItem = useSelector((state) => state.requestDetail.selectedRequestItem)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(2)

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

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

  return (
    <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
      <Table sx={{ maxWidth: '100%', minHeight: 300, padding: "10px" }} stickyHeader>
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
          {((rowsPerPage > 0 && selectedRequestItem?.length > 0)
            ? selectedRequestItem?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : selectedRequestItem
          ).map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="right">{t(row?.product.productGroup.code)}</StyledTableCell>
              <StyledTableCell align="right">{row?.product.unitPrice + " " + row?.product.currency.code}</StyledTableCell>
              <StyledTableCell align="right">{row?.quantity}</StyledTableCell>
              <StyledTableCell align="right">{t(row?.product.unitOfMeasure.code)}</StyledTableCell>
              <StyledTableCell align="right">{t(row?.product.productType.code)}</StyledTableCell>
              <StyledTableCell align="right">{t(row?.splitProfileStatus.code)}</StyledTableCell>
              <StyledTableCell align="right">{t(requirements?.[selectedRequestIndex]?.deliveryType.code)}</StyledTableCell>
              <StyledTableCell align="right"
                style={{ textTransform: "capitalize" }}
              >{row?.product.businessPartner.name.toLowerCase()}</StyledTableCell>
              <StyledTableCell align="right">{(row?.isSpecial ? t("Yes") : t("No"))}</StyledTableCell>
              <StyledTableCell align="right">{row?.url}</StyledTableCell>
              <StyledTableCell align="right">{<LinearProgressWithLabel value={row?.remainderQuantity / row?.quantity * 100} />}</StyledTableCell>
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
            count={selectedRequestItem?.length}
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