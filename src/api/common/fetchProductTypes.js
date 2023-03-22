import { productTypes } from "../../redux/commonSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"


async function fetchProductTypes() {
    try {
        const response = await fetch(BASE_URL + 'api/product-type');

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