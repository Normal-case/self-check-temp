import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("http://13.125.154.101/api/", body)
    }
}
