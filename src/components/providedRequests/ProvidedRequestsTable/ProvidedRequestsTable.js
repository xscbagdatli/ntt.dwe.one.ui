import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  tableHeadCategories,
  productInputSpecs
} from "../provided-requests-data.js"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../helpers/formatDate.js';
import { Box, FormControl, Link, TextField } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButtonComponent from '../../common/IconButtonComponent.js';
import LinkIcon from '@mui/icons-material/Link';

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

  const [expanded, setExpanded] = useState(false)
  const [inputAreaArray, setInputAreaArray] = useState([1, 2])

  const handleIconButton = (buttonType, index) => {
    if (buttonType === "expandButton") {
      setExpanded(!expanded)
    }
    else if (buttonType === "incrementButton") {
      // debugger
      if (index === inputAreaArray?.length - 1) {
        setInputAreaArray([...inputAreaArray, []])
      }
      else {
        let newInputAreaArray = inputAreaArray.filter((element, i) =>
          i !== index
        )
        setInputAreaArray(newInputAreaArray)
      }
    }
  }

  // const iconComponent = (icon, buttonType) => {
  //   if (icon) {
  //     return <Box
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         backgroundColor: "#E1474A", borderRadius: "30px",
  //         width: "40px",
  //         height: "40px",
  //         cursor: "pointer",
  //         color: "#FFFFFF"
  //       }}>
  //       {/* {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} */}
  //       {icon}
  //     </Box>
  //   }

  // }

  return (
    <>
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
              <StyledTableCell align="right">{t(item?.product?.productGroup?.code)}</StyledTableCell>
              <StyledTableCell align="right">{item?.product?.unitPrice + " " + item?.product?.currency?.code}</StyledTableCell>
              <StyledTableCell align="right">{item?.quantity}</StyledTableCell>
              <StyledTableCell align="right">{t(item?.product?.unitOfMeasure?.code)}</StyledTableCell>
              <StyledTableCell align="right">{t(item?.product?.productType?.code)}</StyledTableCell>
              <StyledTableCell align="right">{t(item?.splitProfileStatus?.code)}</StyledTableCell>
              <StyledTableCell align="right">{t(requirementWithId?.deliveryType?.code)}</StyledTableCell>
              <StyledTableCell align="right"
                style={{ textTransform: "capitalize" }}
              >{item?.product?.businessPartner?.name.toLowerCase()}</StyledTableCell>
              <StyledTableCell align="right">{(item?.isSpecial ? t("Yes") : t("No"))}</StyledTableCell>
              <StyledTableCell align="right">
                {
                  item?.url ?
                    <Link href={item?.url}>
                      <LinkIcon />
                    </Link>
                    :
                    "-"
                }
              </StyledTableCell>
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

      <Box
        paddingLeft="8px"
        marginY="5px"
        display={expanded ? "none" : "flex"}
        alignItems="center"
        justifyContent="center"
      // width: "100%",
      >
        <Box
          onClick={() => handleIconButton("expandButton")}>
          {IconButtonComponent(<ArrowDropDownIcon />)}
        </Box>
      </Box>

      {
        inputAreaArray?.map((area, index) => (
          <Box
            key={index}
            component="form"
            sx={{
              display: !expanded ? "none" : "flex",
              // width: '98%',
              '& .MuiTextField-root': { m: 1, width: 'auto' },
            }}
            noValidate
            autoComplete="off"
            bgcolor="#FFF"
          >
            <Box paddingY={3} paddingLeft={1} marginBottom={4}>
              {
                productInputSpecs?.map((el, index) => (
                  el.type === "input" &&
                  <FormControl key={el.id}>
                    <TextField
                      // type={el.inputType}
                      // value={Object.values(productValuesToPost)[el.id]}
                      // error={!Object.values(productValuesToPost)[el.id]}
                      // id="outlined-error-helper-text"
                      label={t(el.title)}
                      // helperText={!Object.values(productValuesToPost)[el.id] ? t("PleaseFill") : ""}
                      style={{ width: index === 0 ? "222px" : index === 4 ? "760px" : "163px" }}
                      // onChange={(e) => handleProductInputs(e, el.id)}
                      // inputProps={{
                      //   min: "1",
                      // }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                ))
              }
              <Box
                marginY="5px"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // width: "100%",
                }}>
                <Box
                  onClick={() => handleIconButton("incrementButton", index)}>
                  {IconButtonComponent(index === inputAreaArray?.length - 1 ? <AddCircleOutlineIcon fontSize="medium" /> : <DeleteIcon />)}
                </Box>
              </Box>
            </Box>

          </Box>
        ))
      }

      <Box
        paddingLeft="8px"
        marginY="5px"
        display={!expanded ? "none" : "flex"}
        alignItems="center"
        justifyContent="center"
      // width: "100%",
      >
        <Box
          onClick={() => handleIconButton("expandButton")}>
          {IconButtonComponent(<ArrowDropUpIcon />)}
        </Box>
      </Box>
    </>
  );
}