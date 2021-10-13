import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("http://192.168.96.1/api/", body)
    }
}