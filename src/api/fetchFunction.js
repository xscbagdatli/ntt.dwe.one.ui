import { store } from "../redux/store";
import { BASE_URL } from '../apiConfig';

async function fetchFunction(apiEndpoint, reduxAction, requestOptions, chainingApi, extraProps) {
    // First parameter is endpoint from apiConfig file, second parameter is redux action from its slice, if we need to dispatch more than one action it should be an array of actions, third parameter is requestOptions if we want to make a call except fetch, fourth parameter is if its a chaining api, the next function for api call, fifth parameter is extraProps which we want to pass to next api.

    await fetch(BASE_URL + apiEndpoint, (requestOptions && requestOptions))
        .then(response => {
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            response.json().then(data => {
                // FOR DISPATCHING MULTIPLE REDUX ACTIONS
                if (reduxAction) {
                    if (Array.isArray(reduxAction)) {
                        reduxAction?.map(action =>
                            store.dispatch(action(data.result.data))
                        )
                    }
                    else {
                        store.dispatch(reduxAction(data.result.data))
                    }
                }
                // FOR CHAINING APIS
                if (chainingApi) {
                    if (extraProps) {
                        chainingApi(extraProps, data.result.data)
                    }
                    else {
                        chainingApi(data.result.data)
                    }
                }

                return data.result.data;
            })
        })

        .catch(error => {
            return error.message; // 'An error has occurred: 404'
        })
}

export default fetchFunction
