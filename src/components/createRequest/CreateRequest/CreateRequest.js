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
import { useDispatch, useSelector } from 'react-redux';
import {
  createRequesterObject,
  createProductObject
} from '../../../redux/createRequestSlice';
function CreateRequest() {
  const { t } = useTranslation()
  const dispatch = useDispatch();

  // Global States
  const priceUnits = useSelector((state) => state.common.priceUnits)
  const measureUnits = useSelector((state) => state.common.measureUnits)
  const deliveryTypes = useSelector((state) => state.common.deliveryTypes)

  // Values To Post
  const [requesterValuesToPost, setRequesterValuesToPost] = useState([])
  const [productValuesToPost, setProductValuesToPost] = useState([])

  // Requester Inputs
  const [name, setName] = useState("")
  const [employeeNo, setEmployeeNo] = useState(0)
  const [gsm, setGsm] = useState(0)
  const [email, setEmail] = useState("")
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("")
  const [adress, setAdress] = useState("")

  // Product Inputs
  const [productname, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productSubCategory, setProductSubCategory] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [priceUnit, setPriceUnit] = useState("")
  const [measureUnit, setMeasureUnit] = useState("")
  const [purchaseType, setPurchaseType] = useState("")
  const [providingType, setProvidingType] = useState("")
  const [deliveryType, setDeliveryType] = useState("")
  const [deliveryCompany, setDeliveryCompany] = useState("")
  const [productUrl, setProductUrl] = useState("")
  const [isSpecialProduct, setIsSpecialProduct] = useState(false)

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
        setIsSpecialProduct(!isSpecialProduct)
        break;
    }
  }

  useEffect(() => {
    setRequesterValuesToPost({
      name,
      employeeNo,
      gsm,
      email,
      expectedDeliveryDate,
      adress,
    })
  }, [name, employeeNo, gsm, email, expectedDeliveryDate, adress])

  useEffect(() => {
    setProductValuesToPost({
      productname,
      productCategory,
      productSubCategory,
      quantity,
      measureUnit,
      price,
      priceUnit,
      purchaseType,
      providingType,
      deliveryType,
      deliveryCompany,
      isSpecialProduct,
      productUrl
    })
  }, [productname, productCategory, productSubCategory, quantity, measureUnit, price, priceUnit, purchaseType, providingType, deliveryType, deliveryCompany, isSpecialProduct, productUrl])

  const handleAddProduct = () => {
    dispatch(createRequesterObject(requesterValuesToPost))
    dispatch(createProductObject(productValuesToPost))
  }

  return (
    <div className={CreateRequestCss.create_request_container}>

      <Box className={CreateRequestCss.create_request_header_container}>
        <Box className={CreateRequestCss.create_request_header_title}>{t("ResponsibleName")}</Box>
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
            bgcolor="#FFF"
          >
            <Box padding="24px">
              {
                requesterInputSpecs?.map((el, index) => (
                  el.type === "input" ?
                    <FormControl >
                      <TextField
                        error={!Object.values(requesterValuesToPost)[el.id]}
                        id="outlined-error-helper-text"
                        label={t(el.title)}
                        helperText={!Object.values(requesterValuesToPost)[el.id] ? t("PleaseFill") : ""}
                        style={{ width: index === 5 ? "700px" : "222px" }}
                        onChange={(e) => handleRequesterInputs(e, el.id)}
                      />
                    </FormControl>
                    :
                    <>
                      <FormControl sx={{ width: "222px", margin: "8px" }}>
                        <InputLabel id="demo-simple-select-label">{t(el.title)}</InputLabel>
                        <Select
                          error={!Array(Object.values(requesterValuesToPost)[el.id])}
                          helperText={!Object.values(requesterValuesToPost)[el.id] ? t("PleaseFill") : ""}
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
            bgcolor="#FFF"
          >
            <Box padding="24px" paddingBottom="unset">
              {
                productInputSpecs?.map((el, index) => (
                  el.type === "input" ?
                    <FormControl key={el.id}>
                      <TextField
                        error={!Object.values(productValuesToPost)[el.id]}
                        id="outlined-error-helper-text"
                        label={t(el.title)}
                        helperText={!Object.values(productValuesToPost)[el.id] ? t("PleaseFill") : ""}
                        style={{ width: index === 0 ? "222px" : index === 8 ? "345px" : "163px" }}
                        onChange={(e) => handleProductInputs(e, el.id)}
                      />
                    </FormControl>
                    :
                    <>
                      <FormControl key={el.id} sx={{ width: index === 5 ? "222px" : "163px", margin: "8px" }}>
                        <InputLabel>{t(el.title)}</InputLabel>
                        <Select
                          error={!Object.values(productValuesToPost)[el.id]}
                          helperText={!Object.values(productValuesToPost)[el.id] ? t("PleaseFill") : ""}
                          id="demo-simple-select"
                          // value={age}
                          label={t(el.title)}
                          onChange={(e) => handleProductInputs(e, el.id)}
                        >
                          {
                            (priceUnits.length > 0 && el.id === 3) ?
                              priceUnits?.map(unit => {
                                if (unit.languageId?.toLowerCase() === i18n.language) {
                                  return <MenuItem value={unit?.objectId}>{unit?.objectId}</MenuItem>
                                }
                              })
                              :
                              (measureUnits.length > 0 && el.id === 4) ?
                                measureUnits?.map(unit => {
                                  return <MenuItem value={unit?.text.objectId}>{t(unit?.text.objectId)}</MenuItem>
                                })
                                :
                                (deliveryTypes.length > 0 && el.id === 7) ?
                                  deliveryTypes?.map(unit => {
                                    return <MenuItem value={unit?.text.objectId}>{t(unit?.text.objectId)}</MenuItem>
                                  })
                                  :
                                  <MenuItem value={""}>{""}</MenuItem>

                          }
                        </Select>
                      </FormControl>
                    </>
                ))
              }
            </Box>
          </Box>
        </div>
        <Box className={CreateRequestCss.create_request_actions_container}>
          <FormControlLabel control={<Checkbox onChange={(e) => handleProductInputs(e)} />} label={t("SpecialProduct")} />
          <Button
            onClick={() => handleAddProduct()}
            variant="contained" style={{ backgroundColor: "#E1474A", borderRadius: "36px", textTransform: "capitalize" }}>{t("AddProduct")}</Button>
        </Box>
      </div>
      <Box

        bgcolor="#FFF">
        <CreateRequestTable />

      </Box>
      <Box className={CreateRequestCss.create_request_actions_container} style={{ marginTop: "20px", justifyContent: "flex-end", }}>
        <Button variant="contained" style={{ backgroundColor: "#E1474A", borderRadius: "36px", textTransform: "capitalize" }}>{t("CreateRequest")}</Button>
      </Box>
    </div>

  );
}

export default CreateRequest
