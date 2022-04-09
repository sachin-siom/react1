import axios from "axios"
import {adminHelloUrl, adminHelloBeanUrl} from '../../TodoApp/Constant.js'

class HelloWorldService{

    executeHelloWorldService(){
        return axios.get(`${adminHelloUrl}`);
    }

    executeHelloWorldBeanService(){
        return axios.get(`${adminHelloBeanUrl}`)
    }


}
export default new HelloWorldService()