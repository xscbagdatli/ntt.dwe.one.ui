// Redux eklemelerinden sonra actionları değiştir !!

import { requirementSummary } from "../../redux/homepageSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"


async function fetchRequirementSummary() {
    try {
        const response = await fetch(BASE_URL + 'api/analytic/requirement-summary');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const units = await response.json();
        store.dispatch(requirementSummary(units.result.data))
        return units.result.data;
    }
    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };
}

export default fetchRequirementSummary