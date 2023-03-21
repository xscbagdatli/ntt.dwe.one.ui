import { deliveryTypes } from "../../redux/commonSlice";
import { store } from "../../redux/store";


async function fetchDeliveryTypes() {
    try {

        const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/delivery-type');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const types = await response.json();
        store.dispatch(deliveryTypes(types.result.data))
        return types.result.data;
    }
    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchDeliveryTypes