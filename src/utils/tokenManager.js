export default class TokenManager {
    static get() {
        return localStorage.getItem("auth");
      }
    
    static set(idToken, expired_at) {
        if (idToken) {
          const SESSION_LENGTH = ( 5 * 60 * 1000 - 10 * 1000);
          let expired_at_in_seconds = Math.round(new Date().getTime()) + SESSION_LENGTH;
          localStorage.setItem("expired_at", expired_at_in_seconds);
          localStorage.setItem("auth", idToken);
        }
    }
    
    static setUserName(userName, userid) {
        if (userName) {
          localStorage.setItem("username", userName);
          localStorage.setItem("userid", userid);
        }
      }
}