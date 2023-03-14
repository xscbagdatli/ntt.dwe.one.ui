// Redux eklemelerinden sonra actionları değiştir !!

import { measureUnits } from "../../redux/commonSlice";
import { store } from "../../redux/store";


async function fetchRequirements() {
    const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/requirement');

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const units = await response.json();
    store.dispatch(measureUnits(units.result.data))
    return units.result.data;
}
fetchRequirements().catch(error => {
    return error.message; // 'An error has occurred: 404'
});

export default fetchRequirements