import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar';
import {getAccountDetailsApi} from "../services/accountApi"
import { useParams } from 'react-router-dom';
function AccountDetails() {
    const {id}=useParams();
    const [account,setAccount]=useState(null)
    useEffect(()=>{
        fetchAccount();
    },[]);
    async function fetchAccount(){
        try {
            const res=await getAccountDetailsApi(id);
            setAccount(res.data);
        } catch (error) {
            console.error("failed to fetch account details");
            
        }
    }
  return (
    <>
        <Navbar/>
        <div style={{padding:20}}>
        {account?(
            <div style={{padding:20}}>
                <p><b>Account Number</b>{account.number}</p>
                <p><b>Account Type</b>{account.type}</p>
                <p><b>Account Balance</b>{account.balance}</p>
            </div>
        ):<p>Loading</p> }
        </div>
    </>
    
  )
}

export default AccountDetails