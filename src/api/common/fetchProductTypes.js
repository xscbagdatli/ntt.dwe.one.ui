import { productTypes } from "../../redux/commonSlice";
import { store } from "../../redux/store";


async function fetchProductTypes() {
    try {
        const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/product-type');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const types = await response.json();
        store.dispatch(productTypes(types.result.data))
        return types.result.data;
    }

    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchProductTypes