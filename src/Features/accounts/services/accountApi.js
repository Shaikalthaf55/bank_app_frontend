import api from "../../../api/apiClient"
export function getAccountsApi(){
    return api.get("/account");
}
export function getAccountDetailsApi(id){
    return api.get(`/account/${id}`);
}
