import axios from "axios"
import {basicAuthUrl} from './Constant.js'


class AuthenticationService {

    executeBasicAuthService(username, password){
        return axios.get(`${basicAuthUrl}`,{headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeRetailerTicket(url, date, retailId){
        return axios.get(`${url}/${retailId}/${date}`)
    }

    executCommissionReport(url, fdate, tdate){
        return axios.get(`${url}/${fdate}/${tdate}`)
    }

    executLoadReport(url){
        return axios.get(`${url}`)
    }

    executeRetailerBalance(url, retailId, data){
        return axios.post(`${url}/${retailId}`, data)
    }

    executeLastXTxn(url, retailId, limit){
        return axios.get(`${url}/${retailId}/${limit}`)
    }

    executeIncludeNumbers(url, data){
        return axios.put(`${url}/`, data)
    }

    executeRetailerStatusUpdate(url ,retailId){
        return axios.put(`${url}/${retailId}`)
    }

    executeResetMAC(url ,data){
        return axios.post(`${url}`, data)
    }
    executeopenController(url ){
        return axios.get(`${url}`)
    }
    executeRetailers(url){
        return axios.get(`${url}`)
    }

    addRetailer(url, data){
        return axios.post(`${url}`, data)
    }

    changePassword(url, data){
        return axios.post(`${url}`, data)
    }

    updateProfirPercentage(url, data){
        return axios.post(`${url}`, data)
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ':' + password)
    }

    registerSuccessfulLogin(username, password){
        let basicAuth = this.createBasicAuthToken(username, password)
        sessionStorage.setItem('authenticatedUser', basicAuth)
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
    }
}

export default new AuthenticationService()