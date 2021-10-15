import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("http://self-check-api.shop/api/", body)
    }

    static sizeSend(body){
        return axios.post("http://self-check-api.shop/api/size/", body)
    }
}