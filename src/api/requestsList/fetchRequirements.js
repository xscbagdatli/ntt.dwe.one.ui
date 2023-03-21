import { requirements } from "../../redux/requestsListSlice";
import { store } from "../../redux/store";


async function fetchRequirements() {
    try {
        const response = await fetch('https://one-heart-api-dev.azurewebsites.net/api/requirement');

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