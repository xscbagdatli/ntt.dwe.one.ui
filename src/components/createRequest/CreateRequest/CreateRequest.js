import { Box, Typography, Container, Button, TextField, InputAdornment, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@mui/material';
import CreateRequestCss from "./styles.module.css"
import CreateRequestTable from '../CreateRequestTable/CreateRequestTable';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import {
  requesterInputSpecs,
  productInputSpecs,
} from "../create-request-data.js"
function CreateRequest() {
  const { t } = useTranslation()
  // Values To Post
  const [valuesToPost, setValuesToPost] = useState([])

  // Requester Inputs
  const [name, setName] = useState("")
  const [employeeNo, setEmployeeNo] = useState()
  const [gsm, setGsm] = useState(null)
  const [email, setEmail] = useState("")
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("")
  const [adress, setAdress] = useState("")

  // Product Inputs
  const [productname, setProductName] = useState("")
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState(null)
  const [priceUnit, setPriceUnit] = useState("")
  const [measureUnit, setMeasureUnit] = useState("")
  const [purchaseType, setPurchaseType] = useState("")
  const [providingType, setProvidingType] = useState("")
  const [deliveryType, setDeliveryType] = useState("")
  const [productUrl, setProductUrl] = useState("")

  const handleRequesterInputs = (e, id) => {
    switch (id) {
      case 0:
        setName(e.target.value)
        break;
      case 1:
        setEmployeeNo(e.target.value)
        break;
      case 2:
        setGsm(e.target.value)
        break;
      case 3:
        setEmail(e.target.value)
        break;
      case 4:
        setExpectedDeliveryDate(e.target.value)
        break;
      case 5:
        setAdress(e.target.value)
        break;

      default:
        break;
    }
  }

  const handleProductInputs = (e, id) => {
    switch (id) {
      case 0:
        setProductName(e.target.value)
        break;
      case 1:
        setQuantity(e.target.value)
        break;
      case 2:
        setPrice(e.target.value)
        break;
      case 3:
        setPriceUnit(e.target.value)
        break;
      case 4:
        setMeasureUnit(e.target.value)
        break;
      case 5:
        setPurchaseType(e.target.value)
        break;
      case 6:
        setProvidingType(e.target.value)
        break;
      case 7:
        setDeliveryType(e.target.value)
        break;
      case 8:
        setProductUrl(e.target.value)
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    setValuesToPost([
      name,
      employeeNo,
      gsm,
      email,
      expectedDeliveryDate,
      adress,
      productname,
      quantity,
      price,
      priceUnit,
      measureUnit,
      purchaseType,
      providingType,
      deliveryType,
      productUrl
    ])
  }, [name, employeeNo, gsm, email, expectedDeliveryDate, adress, productname, quantity, price, priceUnit, measureUnit, purchaseType, providingType, deliveryType, productUrl])


  return (
    <div className={CreateRequestCss.create_request_container}>

      <Box className={CreateRequestCss.create_request_header_container}>
        <Box className={CreateRequestCss.create_request_header_title}>{"Sorumlu Adı:"}</Box>
        <Box className={CreateRequestCss.create_request_header_name}>{"Emre Taşdemir"}</Box>
      </Box>

      <div className={CreateRequestCss.create_request_info_container}>
        <div className={CreateRequestCss.create_request_requester_info_container}>
          <Box className={CreateRequestCss.create_request_requester_info_header_container}>{t("RequesterUppercase")}</Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Box padding="24px">
              {
                requesterInputSpecs?.map((el, index) => (
                  el.type === "input" ?
                    <FormControl >
                      <TextField
                        error={!valuesToPost[el.id]}
                        id="outlined-error-helper-text"
                        label={t(el.title)}
                        helperText={!valuesToPost[el.id] ? t("PleaseFill") : ""}
                        style={{ width: index === 5 ? "700px" : "222px" }}
                        onChange={(e) => handleRequesterInputs(e, el.id)}
                      />
                    </FormControl>
                    :
                    <>
                      <FormControl sx={{ width: "222px", margin: "8px" }}>
                        <InputLabel id="demo-simple-select-label">{t(el.title)}</InputLabel>
                        <Select
                          error={!valuesToPost[el.id]}
                          helperText={!valuesToPost[el.id] ? t("PleaseFill") : ""}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label={t(el.title)}
                          onChange={(e) => handleRequesterInputs(e, el.id)}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </>
                ))
              }
            </Box>
          </Box>
        </div>
        <div className={CreateRequestCss.create_request_requester_info_container} style={{ marginTop: "unset", borderTop: "unset" }}>
          <Box className={CreateRequestCss.create_request_requester_info_header_container}>{t("ProductUppercase")}</Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: 'auto' },
            }}
            noValidate
            autoComplete="off"
          >
            <Box padding="24px" paddingBottom="unset">
              {
                productInputSpecs?.map((el, index) => (
                  el.type === "input" ?
                    <FormControl key={el.id}>
                      <TextField
                        error={!valuesToPost[6 + el.id]}
                        id="outlined-error-helper-text"
                        label={t(el.title)}
                        helperText={!valuesToPost[6 + el.id] ? t("PleaseFill") : ""}
                        style={{ width: index === 0 ? "222px" : index === 8 ? "345px" : "163px" }}
                        onChange={(e) => handleProductInputs(e, el.id)}
                      />
                    </FormControl>
                    :
                    <>
                      <FormControl key={el.id} sx={{ width: index === 5 ? "222px" : "163px", margin: "8px" }}>
                        <InputLabel>{t(el.title)}</InputLabel>
                        <Select
                          error={!valuesToPost[6 + el.id]}
                          helperText={!valuesToPost[6 + el.id] ? t("PleaseFill") : ""}
                          id="demo-simple-select"
                          // value={age}
                          label={t(el.title)}
                          onChange={(e) => handleProductInputs(e, el.id)}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </>
                ))
              }
            </Box>
          </Box>
        </div>
        <Box className={CreateRequestCss.create_request_actions_container}>
          <FormControlLabel control={<Checkbox />} label={t("SpecialProduct")} />
          <Button variant="contained" style={{ backgroundColor: "#E1474A", borderRadius: "36px", textTransform: "capitalize" }}>{t("AddProduct")}</Button>
        </Box>
      </div>

      <CreateRequestTable />

    </div>

  );
}

export default CreateRequest
