import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("http://127.0.0.1:8000/api/", body)
    }
}