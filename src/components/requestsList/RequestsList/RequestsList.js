import { Button, TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel, Fab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Button from '@mui/joy/Button';
import JoyButton from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FilterListIcon from '@mui/icons-material/FilterList';
import RequestsListCss from "./styles.module.css"
import IconButton from '@mui/material/IconButton';
import ExcelButton from '../../../assets/images/excel-button.png';
import ClearIcon from '@mui/icons-material/Clear';
import RequestsListTable from '../RequestsListTable/RequestsListTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { React, useEffect, useState } from 'react';
// import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { extendTheme } from '@mui/joy';
import { red } from '@mui/material/colors';

function RequestsList() {
  const { t } = useTranslation()
  // Global States - Redux
  const requirements = useSelector((state) => state.requestsList.requirements)
  const requirementStatuses = useSelector((state) => state.common.requirementStatuses)

  // Local States
  const [filteredRequirements, setFilteredRequirements] = useState(null)
  const [open, setOpen] = useState(false)

  const [searchValue, setSearchValue] = useState("")
  const [filterStartDate, setFilterStartDate] = useState("")
  const [filterEndDate, setFilterEndDate] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [applyButtonDisabled, setApplyButtonDisabled] = useState(true)


  const handleSearchChange = (e) => {
    let filteredRequirementsToSet = requirements.filter(request => {
      return request.requestName.toLowerCase().includes(e.target.value.toLowerCase())
    })

    if (e.target.value) {
      setFilteredRequirements(filteredRequirementsToSet)
    }
    else {
      setFilteredRequirements(null)
    }

    setSearchValue(e.target.value)

  }

  const handleFilterDate = (e, id) => {
    if (id === 1) {
      setFilterStartDate(e.target.value)
    }
    else {
      setFilterEndDate(e.target.value)
    }
  }

  const handleFilterStatus = (e) => {
    setFilterStatus(e.target.value)
  }

  const handleFilters = () => {
    let filteredRequirementsToSet

    if (filterStartDate && filterEndDate) {
      filteredRequirementsToSet = requirements.filter(request => {
        return filterStartDate <= request.plannedDeliveryDate.slice(0, 10) && request.plannedDeliveryDate.slice(0, 10) <= filterEndDate
      })

      if (filterStatus && filteredRequirementsToSet.length > 0) {
        filteredRequirementsToSet = filteredRequirementsToSet.filter(request => {
          return request.requirementStatus.id === filterStatus
        })
      }
    }

    else {
      filteredRequirementsToSet = requirements.filter(request => {
        return request.requirementStatus.id === filterStatus
      })
    }

    filteredRequirementsToSet && setFilteredRequirements(filteredRequirementsToSet)
    setOpen(false)
  }

  const handleCloseButton = () => {
    setOpen(false)
    setFilterStartDate("")
    setFilterEndDate("")
    setFilterStatus("")
  }

  const handleClearFilter = () => {
    setFilteredRequirements(null)
    setSearchValue("")
    setFilterStartDate("")
    setFilterEndDate("")
    setFilterStatus("")
  }

  useEffect(() => {
    if ((filterStartDate && filterEndDate) || filterStatus) {
      setApplyButtonDisabled(false)
    }
    else {
      setApplyButtonDisabled(true)
    }
  }, [filterStartDate, filterEndDate, filterStatus])


  const theme = createTheme({
    palette: {
      warning: {
        // This is green.A700 as hex.
        main: '#b42318',
      },
    },
  });

  return (
    <div className={RequestsListCss.requests_list_container}>

      <div className={RequestsListCss.requests_list_header_container}>
        <div className={RequestsListCss.requests_list_header_title}>{t("RequestsList")}</div>
        <div className={RequestsListCss.requests_list_header_description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</div>
      </div>

      <div className={RequestsListCss.requests_list_actions_container}>
        <div className={RequestsListCss.requests_list_actions_top_container}>
          <div className={RequestsListCss.requests_list_actions_left_container}>
            <TextField id="outlined-basic" label={t("Search")} variant="outlined"
              value={searchValue}
              onChange={(e) => handleSearchChange(e)}
              sx={{ width: "100%", background: "#fff" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon color='error' />
                  </InputAdornment>
                )
              }} />
          </div>
          <div className={RequestsListCss.requests_list_actions_right_container}>
            <div className={RequestsListCss.requests_list_excel_container}>
              <IconButton className={RequestsListCss.requests_list_excel_button} color="primary" aria-label="upload excel" component="label" sx={{ borderRadius: "unset" }}>
                <input hidden accept=".xlsx" type="file" />
                <img src={ExcelButton} alt="excel-button" />
              </IconButton>
            </div>
            <div className={RequestsListCss.requests_list_filter_container}>
              <Button
                onClick={() => setOpen(true)}
                // className={RequestsListCss.requests_list_filter_button}
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  color: " #344054"
                }}
                startIcon={<FilterListIcon sx={{
                  color: "#F43443"
                }} />}>
                {t("Filters")}
              </Button>

              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    p: 3,
                    boxShadow: 'lg',
                    borderRadius: "30px",
                    display: 'flex', flexDirection: "column",
                  }}
                >
                  <Typography
                    component="h7"
                    id="modal-title"
                    level="h7"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={3}
                    textTransform="uppercase"
                    lang='tr'
                  >
                    {t("Filter")}
                  </Typography>
                  <Typography mb={1} sx={{ fontWeight: "600" }}>{t("Date")}</Typography>
                  <Box>
                    <FormControl
                      sx={{ width: "47.7%", marginRight: "20px" }}
                    >
                      <TextField
                        value={filterStartDate}
                        error={filterStartDate ? false : true}
                        type={"date"}
                        InputProps={{
                          inputProps:
                          {
                            max: filterEndDate,
                          }
                        }}
                        onChange={(e) => handleFilterDate(e, 1)}
                      />
                    </FormControl>
                    <FormControl
                      sx={{ width: "47.7%" }}
                    >
                      <TextField
                        value={filterEndDate}
                        error={filterEndDate ? false : true}
                        type={"date"}
                        InputProps={{
                          inputProps:
                          {
                            min: filterStartDate,
                          }
                        }}
                        onChange={(e) => handleFilterDate(e, 2)} />
                    </FormControl>
                  </Box>
                  <Box mt={2}>
                    {/* <Typography sx={{ fontWeight: "600" }}>{t("Status")}</Typography> */}
                    <FormControl
                      // key={index}
                      sx={{ width: "100%", margin: "8px 0" }}>

                      <InputLabel>{t("Status")}</InputLabel>
                      <Select
                        label={t("Status")}
                        onChange={(e) => handleFilterStatus(e)}
                      >
                        {
                          requirementStatuses?.map(status => {
                            return <MenuItem value={status.id}>{t(status.code)}</MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                  </Box>
                  <Box className={"flex justify-center mt-6"}>
                    <JoyButton color={"none"} className={"w-[40%] mr-5 border-2 border-solid border-[#D0D5DD] hover:opacity-70"}
                      onClick={() => handleCloseButton()}>{t("Cancel")}</JoyButton>
                    <JoyButton disabled={applyButtonDisabled} color={"danger"} sx={{ width: "40%" }} type="submit"
                      onClick={() => handleFilters()}
                    >{t("Apply")}</JoyButton>
                  </Box>
                </Sheet>
              </Modal>
            </div>
          </div>
        </div>
        <div className={RequestsListCss.requests_list_actions_bottom_container}
          style={{
            display: !filteredRequirements && "none"
          }}>
          <Fab variant="extended" size="small" color="danger"
            sx={{ width: "auto", height: "15px", fontSize: "10px" }}
            onClick={() => handleClearFilter()}
          >
            <ClearIcon sx={{ width: "8%" }} />
            <Box sx={{ width: "120px" }}>
              {t("ClearFilter")}
            </Box>
          </Fab>
        </div>
      </div>

      <RequestsListTable filteredRequirements={filteredRequirements} />
    </div>

  );
}

export default RequestsList
