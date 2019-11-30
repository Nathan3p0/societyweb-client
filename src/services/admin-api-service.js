import config from '../config';
import TokenService from './token-service';

const AdminApiService = {
    getUserInfo() {
        return fetch(`${config.API_ENDPOINT}/members/member`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
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
    },
    getAllMembers() {
        return fetch(`${config.API_ENDPOINT}/members`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
    getAttendingMembers(id) {
        return fetch(`${config.API_ENDPOINT}/events/members/${id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
    fetchEventById(id) {
        return fetch(`${config.API_ENDPOINT}/events/${id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
    inviteNewMemberSms(phone) {
        return fetch(`${config.API_ENDPOINT}/message/invite`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ phone: phone })
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
    postNewEmail(msg) {
        return fetch(`${config.API_ENDPOINT}/message/email`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(msg)
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    }
}

export default AdminApiService;