import { requirements, requirementWithId } from "../../redux/requestsListSlice";
import { REQUIREMENT } from '../../apiConfig';
import fetchRequirementItem from "../requestDetail/fetchRequirementItem";
import fetchFunction from "../fetchFunction";


function fetchRequirements(data) {
    let requirementId = data?.[0]?.requirementId

    let apiEndpointWithQuery = REQUIREMENT + (requirementId ? requirementId : "")

    if (requirementId) {
        fetchFunction(apiEndpointWithQuery, requirementWithId, null, fetchRequirementItem)
    }
    else {
        fetchFunction(apiEndpointWithQuery, requirements)
    }

}
export default fetchRequirements