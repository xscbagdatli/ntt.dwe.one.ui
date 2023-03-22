import { requirements, requirementWithId } from "../../redux/requestsListSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"
import fetchRequirementItem from "../requestDetail/fetchRequirementItem";


async function fetchRequirements(requirementId) {
    try {
        const response = await fetch(BASE_URL + `api/requirement/${requirementId ? requirementId : ""}`)

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const requests = await response.json();
        if (requirementId) {
            store.dispatch(requirementWithId(requests.result.data))
            fetchRequirementItem(requirementId)
        }
        else {
            store.dispatch(requirements(requests.result.data))
        }

        return requests.result.data;
    }
    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchRequirements