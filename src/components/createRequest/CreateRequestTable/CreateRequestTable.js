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
import { useSelector } from 'react-redux';

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
  const businessPartners = useSelector((state) => state.common.businessPartners)
  const sectors = useSelector((state) => state.common.sectors)

  const createProductObjectBody = useSelector((state) => state.createRequest.createProductObjectBody)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(2)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} >
      <Table sx={{ maxWidth: '100%', minHeight: 440, padding: "15px" }} stickyHeader>
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
              <StyledTableCell align="right">{row.productName}</StyledTableCell>
              <StyledTableCell align="right">{t(sectors?.find(sector => sector.id === row.productSector).code)}</StyledTableCell>
              {/* <StyledTableCell align="right">{row?.productSubCategory}</StyledTableCell> */}
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{t(row.measureUnit)}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.priceUnit}</StyledTableCell>
              <StyledTableCell align="right">{t(row.purchaseType)}</StyledTableCell>
              <StyledTableCell align="right">{t(row.providingType)}</StyledTableCell>
              <StyledTableCell align="right">{t(row.deliveryType)}</StyledTableCell>
              <StyledTableCell align="right">{businessPartners?.find(partner => partner.id === row.deliveryCompany).name}</StyledTableCell>
              <StyledTableCell align="right">{row.productUrl}</StyledTableCell>
              <StyledTableCell align="right">{(row.isSpecialProduct ? t("Yes") : t("No"))}</StyledTableCell>
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