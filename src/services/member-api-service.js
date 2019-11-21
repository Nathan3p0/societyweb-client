import config from '../config';
import TokenService from './token-service';

const MemberApiService = {
    getAllMemberEvents() {
        return fetch(`${config.API_ENDPOINT}/events/members`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
    postNewRsvp(rsvp) {
        return fetch(`${config.API_ENDPOINT}/events/members`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(rsvp)
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    }
}

export default MemberApiService;