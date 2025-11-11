import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import { getUserApi } from '../services/userApi';
import { updateUserApi } from '../services/userApi';
function UserProfile() {
    const [user,setUser]=useState({
        name:"",
        mail:"",
        phone:"",
    });
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        loadUser();
    },[])
    async function loadUser(){
        try {
            const res=await getUserApi();
        } catch (error) {
            console.error("failed to get User details");
        }
    }
    function hanleChange(e) {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    async function handleSave(){
        try {
            setLoading(true)
            const res=await updateUserApi(user);
            console.log("updated user:",res.data);
        } catch (error) {
            console.error("failed to update user");
        }finally{
            setLoading(false)
        }
    }
  return (
    <>
    <Navbar/>
    <div style={{padding:50}}>
        <div style={{width:350,display:"flex",flexDirection:"column" ,gap:20}}>
            <input 
            type="text"
            name='name'
            placeholder='enter your name'
            onChange={hanleChange}
            />
            <input 
            type="text"
            name='mail'
            placeholder='enter your mail'
            onChange={hanleChange}
            />
            <input 
            type="text"
            name='phone'
            placeholder='enter your phone'
            onChange={hanleChange}
            />
            <button style={{width:"100%", padding:10,marginTop:10}} disabled={loading} onClick={handleSave}>{loading?"saving":"save"}</button>
        </div>
    </div>
    </>
  )
}

export default UserProfile