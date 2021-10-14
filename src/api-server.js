import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("http://13.125.154.101/api/", body)
    }

    static sizeSend(body){
        return axios.post("http://13.125.154.101/api/size/", body)
    }
}
