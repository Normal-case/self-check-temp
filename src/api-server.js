import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("https://self-check.site/api/", body)
    }

    static sizeSend(body){
        return axios.post("https://self-check.site/api/size/", body)
    }

    static volumnSend(body){
        return axios.post("https://self-check.site/api/volumn/", body)
    }

    static adminSend(){
        return axios.get("https://self-check-api.shop/api/admin/")
    }
}
