import { commitments } from "../../redux/providedRequestsSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"
import fetchRequirements from "../requestsList/fetchRequirements";


async function fetchCommitments() {
    try {
        const response = await fetch(BASE_URL + `api/commitment`)

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const datas = await response.json();
        store.dispatch(commitments(datas.result.data))

        let requirementId = datas.result.data[0].requirementId
        // let requirementItemId = datas.result.data[0].requirementItemId

        fetchRequirements(requirementId)

        return datas.result.data;
    }
    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchCommitments