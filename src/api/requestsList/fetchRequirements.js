import { requirements } from "../../redux/requestsListSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"


async function fetchRequirements() {
    try {
        const response = await fetch(BASE_URL + 'api/requirement');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const requests = await response.json();
        store.dispatch(requirements(requests.result.data))
        return requests.result.data;
    }
    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchRequirements