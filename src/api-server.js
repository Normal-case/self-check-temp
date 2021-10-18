import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("https://self-check-api.shop:8000/api/", body)
    }

    static sizeSend(body){
        return axios.post("https://self-check-api.shop:8000/api/size/", body)
    }
}
