import { Box, Typography, Container, Button, TextField, InputAdornment, FormControl, Select, MenuItem, InputLabel, Checkbox, FormHelperText } from '@mui/material';
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
import postCreateProduct from '../../../api/createRequest/postCreateProduct';
function CreateRequest() {
  const { t } = useTranslation()
  const dispatch = useDispatch();

  // Global States
  const priceUnits = useSelector((state) => state.common.priceUnits)
  const measureUnits = useSelector((state) => state.common.measureUnits)
  const deliveryTypes = useSelector((state) => state.common.deliveryTypes)
  const productTypes = useSelector((state) => state.common.productTypes)
  const splitProfileStatuses = useSelector((state) => state.common.splitProfileStatuses)
  const sectors = useSelector((state) => state.common.sectors)
  const businessPartners = useSelector((state) => state.common.businessPartners)

  const createRequesterObjectBody = useSelector((state) => state.createRequest.createRequesterObjectBody)
  const createProductObjectBody = useSelector((state) => state.createRequest.createProductObjectBody)

  // Values To Post
  const [requesterValuesToPost, setRequesterValuesToPost] = useState([])
  const [productValuesToPost, setProductValuesToPost] = useState([])
  // Button Disabilities
  const [addButtonDisabled, setAddButtonDisabled] = useState(true)
  const [createButtonDisabled, setCreateButtonDisabled] = useState(true)

  // Requester Inputs
  const [name, setName] = useState("")
  const [employeeNo, setEmployeeNo] = useState(0)
  const [gsm, setGsm] = useState(0)
  const [email, setEmail] = useState("")
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("")
  const [adress, setAdress] = useState("")

  // Product Inputs
  const [productName, setProductName] = useState("")
  const [productSector, setProductSector] = useState("")
  // const [productSubCategory, setProductSubCategory] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [priceUnit, setPriceUnit] = useState("")
  const [measureUnit, setMeasureUnit] = useState("")
  const [purchaseType, setPurchaseType] = useState("")
  const [providingType, setProvidingType] = useState("")
  const [deliveryType, setDeliveryType] = useState("")
  const [deliveryCompany, setDeliveryCompany] = useState("")
  const [isSpecialProduct, setIsSpecialProduct] = useState(false)
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
        setProductSector(Number(e.target.value))
        break;
      case 2:
        setQuantity(Number(e.target.value))
        break;
      case 3:
        setMeasureUnit(e.target.value)
        break;
      case 4:
        setPrice(Number(e.target.value))
        break;
      case 5:
        setPriceUnit(e.target.value)
        break;
      case 6:
        setPurchaseType(e.target.value)
        break;
      case 7:
        setProvidingType(e.target.value)
        break;
      case 8:
        setDeliveryType(e.target.value)
        break;
      case 9:
        setDeliveryCompany(Number(e.target.value))
        break;
      case 10:
        setProductUrl(e.target.value)
        break;
      case 11:
        setIsSpecialProduct(!isSpecialProduct)
        break;
      default:
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
      productName,
      productSector,
      // productSubCategory,
      quantity,
      measureUnit,
      price,
      priceUnit,
      purchaseType,
      providingType,
      deliveryType,
      deliveryCompany,
      productUrl,
      isSpecialProduct,
    })
  }, [productName, productSector, quantity, measureUnit, price, priceUnit, purchaseType, providingType, deliveryType, deliveryCompany, productUrl, isSpecialProduct])

  const handleAddProduct = () => {
    dispatch(createRequesterObject(requesterValuesToPost))
    dispatch(createProductObject(productValuesToPost))

    // setRequesterValuesToPost([])
    // setProductValuesToPost([])
  }

  const createRequestButton = () => {
    createProductObjectBody?.map((productObject, index) => {
      postCreateProduct(createRequesterObjectBody?.[index], productObject)
    })
  }

  useEffect(() => {
    let filteredRequesterValuesToPost = []
    let filteredProductValuesToPost = []

    filteredRequesterValuesToPost = Object.values(requesterValuesToPost)?.filter(value => {
      return !value
    })

    filteredProductValuesToPost = Object.values(productValuesToPost)?.filter((value, index) => {
      return index !== 11 && !value
    })

    if (filteredRequesterValuesToPost?.length > 0 || filteredProductValuesToPost?.length > 0) {
      setAddButtonDisabled(true)
    }
    else {
      setAddButtonDisabled(false)
    }
  }, [requesterValuesToPost, productValuesToPost])

  useEffect(() => {
    if (createRequesterObjectBody.length > 0 && createProductObjectBody.length > 0) {
      setCreateButtonDisabled(false)
    }
    else {
      setCreateButtonDisabled(true)
    }
  }, [createRequesterObjectBody, createProductObjectBody])


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
                    <FormControl key={index} >
                      <TextField
                        type={el.inputType}
                        error={!Object.values(requesterValuesToPost)[el.id]}
                        id="outlined-error-helper-text"
                        label={t(el.title)}
                        helperText={!Object.values(requesterValuesToPost)[el.id] ? t("PleaseFill") : ""}
                        style={{ width: index === 5 ? "700px" : "222px" }}
                        onChange={(e) => handleRequesterInputs(e, el.id)}
                        inputProps={{
                          min: "1",
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </FormControl>
                    :
                    <FormControl
                      error={!Object.values(requesterValuesToPost)[el.id]}
                      key={index} sx={{ width: "222px", margin: "8px" }}>
                      <InputLabel>{t(el.title)}</InputLabel>
                      <Select
                        // value={age}
                        label={t(el.title)}
                        onChange={(e) => handleRequesterInputs(e, el.id)}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      <FormHelperText>{!Object.values(requesterValuesToPost)[el.id] ? t("PleaseSelect") : ""}</FormHelperText>
                    </FormControl>
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
            <Box padding="24px">
              {
                productInputSpecs?.map((el, index) => (
                  el.type === "input" ?
                    <FormControl key={el.id}>
                      <TextField
                        type={el.inputType}
                        // value={Object.values(productValuesToPost)[el.id]}
                        error={!Object.values(productValuesToPost)[el.id]}
                        id="outlined-error-helper-text"
                        label={t(el.title)}
                        helperText={!Object.values(productValuesToPost)[el.id] ? t("PleaseFill") : ""}
                        style={{ width: index === 0 ? "222px" : index === 10 ? "400px" : "163px" }}
                        onChange={(e) => handleProductInputs(e, el.id)}
                        inputProps={{
                          min: "1",
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </FormControl>
                    :
                    <FormControl
                      error={!Object.values(productValuesToPost)[el.id]}
                      key={el.id} sx={{ width: index === 5 ? "222px" : "163px", margin: "8px" }}>
                      <InputLabel>{t(el.title)}</InputLabel>
                      <Select
                        // value={age}
                        label={t(el.title)}
                        onChange={(e) => handleProductInputs(e, el.id)}
                      >
                        {
                          (sectors.length > 0 && el.id === 1) ?
                            sectors?.map(sector => {
                              return <MenuItem key={sector?.id} value={sector?.id}>{t(sector?.code)}</MenuItem>
                            })
                            :
                            (measureUnits.length > 0 && el.id === 3) ?
                              measureUnits?.map(unit => {
                                return <MenuItem key={unit?.text.id} value={unit?.text.objectId}>{t(unit?.text.objectId)}</MenuItem>
                              })
                              :
                              (priceUnits.length > 0 && el.id === 5) ?
                                priceUnits?.map(unit => {
                                  return <MenuItem key={unit?.id} value={unit?.code}>{unit?.code}</MenuItem>
                                })
                                :
                                (productTypes.length > 0 && el.id === 6) ?
                                  productTypes?.map(type => {
                                    return <MenuItem key={type?.text.id} value={type?.text.objectId}>{t(type?.text.objectId)}</MenuItem>
                                  })
                                  :
                                  (splitProfileStatuses.length > 0 && el.id === 7) ?
                                    splitProfileStatuses?.map(status => {
                                      return <MenuItem key={status?.text.id} value={status?.text.objectId}>{t(status?.text.objectId)}</MenuItem>
                                    })
                                    :
                                    (deliveryTypes.length > 0 && el.id === 8) ?
                                      deliveryTypes?.map(type => {
                                        return <MenuItem key={type?.text.id} value={type?.text.objectId}>{t(type?.text.objectId)}</MenuItem>
                                      })
                                      :
                                      (businessPartners.length > 0 && el.id === 9) ?
                                        businessPartners?.map(partner => {
                                          return <MenuItem key={partner?.id} value={partner?.id}>{t(partner?.name)}</MenuItem>
                                        })
                                        :
                                        <MenuItem value={""}>{""}</MenuItem>

                        }
                      </Select>
                      <FormHelperText>{!Object.values(productValuesToPost)[el.id] ? t("PleaseSelect") : ""}</FormHelperText>
                    </FormControl>
                ))
              }
            </Box>
          </Box>
        </div>
        <Box className={CreateRequestCss.create_request_actions_container}>
          <FormControlLabel control={<Checkbox onChange={(e) => handleProductInputs(e, 11)} />} label={t("SpecialProduct")} />
          <Button
            onClick={() => handleAddProduct()}
            disabled={addButtonDisabled}
            variant="contained"
            style={{
              backgroundColor: addButtonDisabled ? "" : "#E1474A",
              color: "#FFF",
              borderRadius: "36px",
              textTransform: "capitalize"
            }}>
            {t("AddProduct")}
          </Button>
        </Box>
      </div>
      <Box

        bgcolor="#FFF">
        <CreateRequestTable />

      </Box>
      <Box className={CreateRequestCss.create_request_actions_container} style={{ marginTop: "20px", justifyContent: "flex-end", }}>
        <Button
          variant="contained"
          onClick={() => createRequestButton()}
          disabled={createButtonDisabled}
          style={{
            backgroundColor: createButtonDisabled ? "#D7D7D7" : "#E1474A",
            color: "#FFF",
            borderRadius: "36px",
            textTransform: "capitalize"
          }}
        >
          {t("CreateRequest")}
        </Button>
      </Box>
    </div>

  );
}

export default CreateRequest
