import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import { transactionDetailsApi } from '../services/transactionApi'
function TransactionDetails() {
    const [transctions,setTransactions]=useState([]);
    useEffect(()=>{
        fetchTransactionDetails();
    },[])
    async function fetchTransactionDetails(){
        try {
            const res=await transactionDetailsApi();
            setTransactions(res.data);
        } catch (error) {
            console.error("failed to fecth");
        }
    }
  return (
    <>
        <Navbar/>
        <div style={{padding:20}}>
            <ul>
                {
                    transctions?.map((transaction)=>{
                       return <li key={transaction.id} style={{marginBottom:10}}>
                            {transaction.date} | {transaction.type} | {transaction.amount} | {transaction.status}
                        </li>
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default TransactionDetails