import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("http://192.168.1.54:8000/api/", body)
    }
}