import { sectors } from "../../redux/commonSlice";
import { store } from "../../redux/store";
import postCreateRequest from "./postCreateRequest";


async function postCreateProduct(requesterObject, productObject) {
    // debugger
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

    try {
        // debugger
        const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/product', requestOptions);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const products = await response.json();
        // store.dispatch(sectors(products.result.data))
        postCreateRequest(requesterObject, productObject, products.result.data)
        return products.result.data;
    }

    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default postCreateProduct