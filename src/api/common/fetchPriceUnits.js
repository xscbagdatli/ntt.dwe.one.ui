import { priceUnits } from "../../redux/commonSlice";
import { store } from "../../redux/store";


async function fetchPriceUnits() {
    const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/currency-text');

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const units = await response.json();
    store.dispatch(priceUnits(units.result.data))
    return units.result.data;
}
fetchPriceUnits().catch(error => {
    return error.message; // 'An error has occurred: 404'
});

export default fetchPriceUnits