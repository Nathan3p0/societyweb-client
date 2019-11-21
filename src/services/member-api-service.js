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
    }
}

export default MemberApiService;