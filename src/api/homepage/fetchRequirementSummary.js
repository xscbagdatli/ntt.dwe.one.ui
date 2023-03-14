// Redux eklemelerinden sonra actionları değiştir !!

import { requirementSummary } from "../../redux/homepageSlice";
import { store } from "../../redux/store";


async function fetchRequirementSummary() {
    const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/analytic/requirement-summary');

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const units = await response.json();
    store.dispatch(requirementSummary(units.result.data))
    return units.result.data;
}
fetchRequirementSummary().catch(error => {
    return error.message; // 'An error has occurred: 404'
});

export default fetchRequirementSummary