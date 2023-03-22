import { splitProfileStatuses } from "../../redux/commonSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"


async function fetchSplitProfileStatuses() {
    try {
        const response = await fetch(BASE_URL + 'api/split-profile-status');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const statuses = await response.json();
        store.dispatch(splitProfileStatuses(statuses.result.data))
        return statuses.result.data;
    }

    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchSplitProfileStatuses