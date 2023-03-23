import { PRODUCT } from '../../apiConfig';
import postCreateRequest from "./postCreateRequest";
import fetchFunction from "../fetchFunction";
import { postCreateProductObject as postCreateProductObjectAction } from '../../redux/createRequestSlice';

function postCreateProduct(requesterObject, productObject) {
    const bodyToSend = {
        unitPrice: productObject.price,
        productTypeId: productObject.purchaseType,
        productGroupId: productObject.productSector, // number olmalı
        businessPartnerId: productObject.deliveryCompany,  // number olmalı
        unitOfMeasureId: productObject.measureUnit,
        currencyId: productObject.priceUnit,
        code: productObject.productName,
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyToSend)
    };

    // First parameter is endpoint from apiConfig file, second parameter is redux action from its slice, if we need to dispatch more than one action it should be an array of actions, third parameter is requestOptions if we want to make a call except fetch, fourth parameter is if its a chaining api, the next function for api call, fifth parameter is extraProps which we want to pass to next api.
    fetchFunction(PRODUCT, postCreateProductObjectAction, requestOptions, postCreateRequest)
}
export default postCreateProduct