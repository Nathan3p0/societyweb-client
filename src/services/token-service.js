import config from '../config';
import jwtDecode from 'jwt-decode';

const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token);
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY);
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY);
    },
    hasAuthToken() {
        return !!this.getAuthToken();
    },
    parseJwt(jwt) {
        return jwtDecode(jwt);
    },
    readJwtToken() {
        return TokenService.parseJwt(TokenService.getAuthToken());
    }
}

export default TokenService;