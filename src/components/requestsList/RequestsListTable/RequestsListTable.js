import { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { store } from '../../../redux/store';
import { selectedRequestId } from '../../../redux/requestsListSlice';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../helpers/formatDate';
// import fetchRequirementItem from '../../../api/requestDetail/fetchRequirementItem';

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

export default function RequestsListTable({
  filteredRequirements
}) {
  const { t } = useTranslation()

  const requirements = useSelector((state) => state.requestsList.requirements)
  const filteredRequirementsForTable = useSelector((state) => state.requestsList.filteredRequirementsForTable)

  const [requirementsForTable, setRequirementsForTable] = useState(null)
  const [page, setPage] = useState(0)
  const [rowsPerPage] = useState(5)

  useEffect(() => {
    if (filteredRequirements) {
      setRequirementsForTable(filteredRequirements)
    }
    else {
      setRequirementsForTable(requirements)
    }
  }, [filteredRequirements, requirements])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // row?.requirementStatus.code
  const statusStyles = (statusId) => {
    if (statusId === "COMPLETED") {
      return "success"
    }
    if (statusId === "PARTIAL") {
      return "warning"
    }
    if (statusId === "OPEN") {
      return "default"
    }
    if (statusId === "CANCELLED") {
      return "error"
    }
    if (statusId === "VERIFIED") {
      return "info"
    }
  };

  const handleSelectedRequest = (requestId) => {
    store.dispatch(selectedRequestId(requestId))
  };

  return (
    <>
      {
        filteredRequirementsForTable && filteredRequirementsForTable?.length === 0 ?
          "Filtreye uygun sonuç bulunamadı."
          :
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
                  ? requirementsForTable?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : requirementsForTable
                )?.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {`#${row?.id}`}
                    </StyledTableCell>
                    <StyledTableCell align="right">{formatDate(row?.plannedDeliveryDate)}</StyledTableCell>
                    <StyledTableCell align="right">{row?.requestName}</StyledTableCell>
                    <StyledTableCell align="right">{<Chip label={t(row?.requirementStatus.code)} color={statusStyles(row?.requirementStatus.id)} />}</StyledTableCell>
                    <StyledTableCell align="right">{<LinearProgressWithLabel value={0} />}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Link to={`request-detail/${row?.id}`}>
                        <Box
                          onClick={() => handleSelectedRequest(row?.id)}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#E1474A", borderRadius: "8px", width: "115px",
                            height: "32px",
                            cursor: "pointer",
                            color: "#FFFFFF"
                          }}>
                          {t("GoToDetail")}
                          <ArrowForwardIcon />
                        </Box>
                      </Link>
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
                  count={requirementsForTable?.length}
                  rowsPerPage={5}
                  page={page}
                  onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions}
                />

              </TableFooter>
            </Table>
          </TableContainer >
      }
    </>
  );
}