import { selectedRequestItem } from "../../redux/requestDetailSlice";
import { providedRequestItem } from "../../redux/providedRequestsSlice";
import { REQUIREMENT_ITEM_WITH_REQUIREMENT_ID } from '../../apiConfig';
import fetchFunction from "../fetchFunction";

function fetchRequirementItem(data) {
    let requirementId = data?.id

    // If we need to store data at more than one place at redux, we should send an array with actions of related places at redux.
    const actionsArray = [selectedRequestItem, providedRequestItem]

    let apiEndpointWithQuery = REQUIREMENT_ITEM_WITH_REQUIREMENT_ID + (requirementId ? requirementId : "")

    if (requirementId) {
        fetchFunction(apiEndpointWithQuery, actionsArray)
    }
}
export default fetchRequirementItem