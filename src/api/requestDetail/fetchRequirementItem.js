import { selectedRequestItem } from "../../redux/requestDetailSlice";
import { store } from "../../redux/store";


async function fetchRequirementItem(requirementId) {
    const response = await fetch(`https://one-heart-api-dev.azurewebsites.net/api/requirement-item?RequirementId=${requirementId}`);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const requests = await response.json();
    store.dispatch(selectedRequestItem(requests.result.data))
    return requests.result.data;
}
fetchRequirementItem().catch(error => {
    return error.message; // 'An error has occurred: 404'
});

export default fetchRequirementItem