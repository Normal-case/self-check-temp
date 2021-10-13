import axios from "axios";

export default class API {
    static imageSend(body){
        return axios.post("https://plesss2.herokuapp.com/api/", body)
    }
}