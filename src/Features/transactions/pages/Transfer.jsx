import React, { useState } from 'react'
import {transferMoneyApi} from "../services/transactionApi"
import Navbar from '../../../Components/Navbar';
function Transfer() {
    const [form,setForm] = useState({
        fromAcc:"",
        toAcc:"",
        amount:"",
    });
    const [loading,setLoading]=useState(false);
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    async function handleTransfer(){
        try {
            setLoading(true)
            const res=await transferMoneyApi(form)
            console.log("transfer successful:",res.data)
        } catch (error) {
            console.error("failed to trasfer");
        }finally{
            setLoading(false);
        }
    }
  return (
    <>
    <Navbar/>
        <div style={{padding:20,width:400,}}>
            <input 
            type="text"
            name="fromAcc"
            placeholder='your account number'
            style={{width:"100%",marginBottom:10}}
            onChange={handleChange}
            />
            <input 
            type="text"
            name="toAcc"
            placeholder='reciever account number'
            style={{width:"100%",marginBottom:10}}
            onChange={handleChange}
            />
            <input 
            type="text"
            name="amount"
            placeholder='amount'
            style={{width:"100%",marginBottom:10}}
            onChange={handleChange}
            />
            <button style={{width:"100%", marginTop:10,padding:10}} onClick={handleTransfer} disabled={loading}>
                {loading?"transfering":"Transfer"}
            </button>
        </div>
    </>
  )
}

export default Transfer