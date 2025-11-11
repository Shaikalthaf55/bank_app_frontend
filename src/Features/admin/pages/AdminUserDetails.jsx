import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import { useParams } from 'react-router-dom'
import { getUserDetailsApi } from '../services/adminApi';
function AdminUserDetails() {
    const {id}=useParams();
    const [details,setDetails]=useState()
    useEffect(()=>{
        loadUser();
    },[])
    async function loadUser() {
        try {
            const res=await getUserDetailsApi(id);
            setDetails(res.data);
        } catch (error) {
            console.error("failed to show user");
        }
    }
  return (
    <>
    <Navbar/>
     <div style={{ padding: 20 }}>
        <h2>User Details (Admin)</h2>

        {details ? (
          <pre>{JSON.stringify(details, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default AdminUserDetails