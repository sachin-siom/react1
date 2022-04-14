import AuthenticationService from "./AuthenticationService";
import { API_PATH_BASE } from "./Constant";
import axios from "axios";

const request = axios.create({
    baseURL: API_PATH_BASE
})

axios.interceptors.request.use(
    (req) => {
        if(AuthenticationService.isUserLoggedIn())
            req.headers.Authorization = AuthenticationService.getAuthItem()
       return req;
    },
    (err) => {
       return Promise.reject(err);
    }
 );


export default request