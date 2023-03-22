import { sectors } from "../../redux/commonSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"


async function fetchSectors() {
    try {
        const response = await fetch(BASE_URL + 'api/sector');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const secs = await response.json();
        store.dispatch(sectors(secs.result.data))
        return secs.result.data;
    }

    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchSectors