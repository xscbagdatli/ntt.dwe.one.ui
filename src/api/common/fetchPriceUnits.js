import { priceUnits } from "../../redux/commonSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"


async function fetchPriceUnits() {
    try {
        const response = await fetch(BASE_URL + 'api/currency');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const units = await response.json();
        store.dispatch(priceUnits(units.result.data))
        return units.result.data;
    }

    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchPriceUnits