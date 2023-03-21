import { measureUnits } from "../../redux/commonSlice";
import { store } from "../../redux/store";


async function fetchMeasureUnits() {
    try {

        const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/unit-of-measure');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const units = await response.json();
        store.dispatch(measureUnits(units.result.data))
        return units.result.data;
    }
    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchMeasureUnits