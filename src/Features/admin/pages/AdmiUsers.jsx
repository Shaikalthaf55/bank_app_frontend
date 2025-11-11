import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../../../Components/Navbar"
import { toggoleUserStautusApi ,getUsersApi} from '../services/adminApi';
function AdmiUsers() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        loadUsers();
    },[])
    async function loadUsers(){
        try {
            const res=await getUsersApi();
            setUsers(res.data);
            console.log("users fetched successfully",res.data);
        } catch (err) {
            console.error("failed to get All users");
        }
    }
    async function handleToggle(id) {
        try {
            await toggoleUserStautusApi(id);
            loadUsers();
        } catch (error) {
            console.error("failed to update status");    
        }
    }
  return (
    <>
    <Navbar/>
    <div style={{padding:20}}>
        <h2>Users Details</h2>
        <table style={{marginTop:10}} border="1" cellPadding="8">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Accounts</th>
                    <th>Action</th>
                </tr>
            </thead>
          <tbody>
             {
            users?.map((u)=>{
                <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.active?"Active":"InActive"}</td>
                    <td>
                        <Link to={`/admin/user/${u.id}`}>View</Link>
                    </td>
                    <td>
                        <button onClick={handleToggle(u.id)}>{u.active?"Deactivate":"Activate"}</button>
                    </td>
                </tr>
            })
           }
          </tbody>
        </table>
    </div>
    </>
  )
}

export default AdmiUsers