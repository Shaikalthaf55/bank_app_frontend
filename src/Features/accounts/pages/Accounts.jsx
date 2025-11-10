import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getAccountsApi} from "../services/accountApi"
import Navbar from '../../../Components/Navbar'
function Accounts() {
    const [accounts,setAccounts]=useState([])
    useEffect(()=>{
        fetchAccounts();
    },[])
    async function fetchAccounts(){
        try {
            const res=await getAccountsApi();
            setAccounts(res.data);
        } catch (error) {
            console.error("failed to fecth accounts");
            
        }
    }
  return (
    <>
    <Navbar/>
        <div style={{padding:20}}>
            <ul>
                {accounts.map((account)=>{
                   return <li key={account.id}>
                    <Link to={`/accounts/${account.id}`}>
                    {account.number}-{account.type}-{account.balance}
                    </Link>
                </li>})
                }
            </ul>
            
        </div>
    </>

  )
}

export default Accounts