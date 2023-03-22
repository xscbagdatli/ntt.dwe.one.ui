import { businessPartners } from "../../redux/commonSlice";
import { store } from "../../redux/store";
import { BASE_URL } from "../../Enums"


async function fetchBusinessPartners() {
    try {

        const response = await fetch(BASE_URL + 'api/business-partner');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const partners = await response.json();
        store.dispatch(businessPartners(partners.result.data))
        return partners.result.data;
    }
    catch (error) {
        return error.message; // 'An error has occurred: 404'
    };

}
export default fetchBusinessPartners