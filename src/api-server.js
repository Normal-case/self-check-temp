import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("https://self-check-api.shop/api/", body)
    }

    static sizeSend(body){
        return axios.post("https://self-check-api.shop/api/size/", body)
    }

    static volumnSend(body){
        return axios.post("https://self-check-api.shop/api/volumn/", body)
    }

    static adminSend(){
        return axios.get("https://self-check-api.shop/api/admin/")
    }
}
