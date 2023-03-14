import { deliveryTypes } from "../../redux/commonSlice";
import { store } from "../../redux/store";


async function fetchDeliveryTypes() {
    const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/delivery-type');

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const units = await response.json();
    store.dispatch(deliveryTypes(units.result.data))
    return units.result.data;
}
fetchDeliveryTypes().catch(error => {
    return error.message; // 'An error has occurred: 404'
});

export default fetchDeliveryTypes