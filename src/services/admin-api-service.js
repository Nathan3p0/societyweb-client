import config from '../config';
import TokenService from './token-service';

const AdminApiService = {
    getAllEvents() {
        return fetch(`${config.API_ENDPOINT}/events`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
    postNewEvent(newEvent) {
        return fetch(`${config.API_ENDPOINT}/events`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    }
}

export default AdminApiService;