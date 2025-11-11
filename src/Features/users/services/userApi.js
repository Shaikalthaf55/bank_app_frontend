import api from "../../../api/apiClient"
export function getUserApi(){
    return api.get("/user/me")
}
export function updateUserApi(data){
    return api.put("/user/me",data)
}