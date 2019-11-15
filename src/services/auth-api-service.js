import config from '../config';
import TokenService from '../services/token-service';

const AuthApiService = {
    postLogin({ username, password }) {
        return fetch(`${config.API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken);
                return res;
            })
    }
}

export default AuthApiService;