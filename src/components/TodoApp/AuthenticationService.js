import axios from "axios"
import {basicAuthUrl} from './Constant.js'


class AuthenticationService {

    executeBasicAuthService(username, password){
        return axios.get(`${basicAuthUrl}`,{headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeRetailerTicket(url, date, retailId){
        return axios.get(`${url}/${retailId}/${date}`)
    }

    executeRetailerBalance(url, retailId, data){
        return axios.post(`${url}/${retailId}`, data)
    }

    executeIncludeNumbers(url, data){
        return axios.put(`${url}/`, data)
    }

    executeRetailerStatusUpdate(url ,retailId){
        return axios.put(`${url}/${retailId}`)
    }

    executeRetailers(url){
        return axios.get(`${url}`)
    }

    addRetailer(url, data){
        return axios.post(`${url}`, data)
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ':' + password)
    }

    registerSuccessfulLogin(username, password){
        let basicAuth = this.createBasicAuthToken(username, password)
        sessionStorage.setItem('authenticatedUser', basicAuth)
       // this.setupAxiosInterceptor(basicAuth);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null){
            return false
        }
        return true
    }

    getAuthItem(){
        return sessionStorage.getItem('authenticatedUser')
    }

    setupAxiosInterceptor(basicAuthHeader){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }
        );

        /*axios.interceptors.response.use((response) => {
           
            if (response.config.parse) {
                //perform the manipulation here and change the response object
            }
            return response;
        }, (error) => {
            alert(error)
            return Promise.reject(error.message);
        });*/
        //alert("You are not authorized");
    }
}

export default new AuthenticationService()