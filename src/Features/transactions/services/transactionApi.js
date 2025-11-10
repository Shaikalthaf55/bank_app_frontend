import api from "../../../api/apiClient"
export  function transferMoneyApi(data){
    return api.post("/transfer",data)
}
export  function transactionDetailsApi(){
    return api.get("/transactions")
}
