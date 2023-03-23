import { measureUnits } from "../../redux/commonSlice";
import { UNIT_OF_MEASURE } from '../../apiConfig';
import fetchFunction from "../fetchFunction";

async function fetchMeasureUnits() {
    // First parameter is endpoint from apiConfig file, second parameter is redux action from its slice, if we need to dispatch more than one action it should be an array of actions, third parameter is requestOptions if we want to make a call except fetch, fourth parameter is if its a chaining api, the next function for api call, fifth parameter is extraProps which we want to pass to next api.
    fetchFunction(UNIT_OF_MEASURE, measureUnits)
}
export default fetchMeasureUnits