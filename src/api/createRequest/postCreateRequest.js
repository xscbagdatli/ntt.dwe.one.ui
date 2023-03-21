import { sectors } from "../../redux/commonSlice";
import { store } from "../../redux/store";


async function postCreateRequest(requesterObject, productObject, newProduct) {
    debugger
    const bodyToSend = {
        requestName: productObject.productName,
        requestBy: requesterObject.name,
        requestPersonNo: requesterObject.employeeNo,
        requestEmail: requesterObject.email,
        requestPhone: requesterObject.gsm,
        deliveryTypeId: productObject.deliveryType,
        addressId: 1, // ADRES ELLE GİRİLİYOR ID YERİNE TEXT ALINMALI SORULACAK
        plannedDeliveryDate: `${requesterObject.expectedDeliveryDate}T00:00:00.000Z`,
        responsibleHrbpName: "EMRE T", // ŞİMDİLİK BOŞ
        responsibleHrbpEmail: "emretas211@gmail.com", // ŞİMDİLİK BOŞ
        requirementStatusId: "OPEN", // Mantıken hep open olarak gitmeli sonra değişmesi gerekirse dinamikleşebilir.
        requirementItems: [
            {
                quantity: productObject.quantity,
                isSpecial: productObject.isSpecialProduct,
                url: productObject.productUrl,
                requirementId: 13,
                productId: newProduct.id,
                splitProfileStatusId: productObject.providingType,
            }
        ]
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyToSend)
    };

    try {
        const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/requirement', requestOptions);
        debugger
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const reqs = await response.json();
        // store.dispatch(sectors(reqs.result.data))
        return reqs.result.data;
    }

    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default postCreateRequest