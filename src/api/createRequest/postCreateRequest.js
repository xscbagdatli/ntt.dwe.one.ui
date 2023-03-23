import { REQUIREMENT } from '../../apiConfig';
import fetchFunction from '../fetchFunction';

function postCreateRequest(requesterObject, productObject, newProduct) {
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
                productId: newProduct?.id,
                splitProfileStatusId: productObject.providingType,
            }
        ]
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyToSend)
    };

    const propsToPass = {
        requesterObject: requesterObject,
        productObject: productObject,
    }
    fetchFunction(REQUIREMENT, null, requestOptions, propsToPass)

}
export default postCreateRequest