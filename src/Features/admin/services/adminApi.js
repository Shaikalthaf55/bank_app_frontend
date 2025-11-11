import api from "../../../api/apiClient"

export function getUsersApi(){
    return api.get("/admin/users")
}
export function getUserDetailsApi(id){
    return api.get(`/admin/users/${id}`)
}
export function toggoleUserStautusApi(id){
    return api.get(`/admin/users/${id}`)
}
