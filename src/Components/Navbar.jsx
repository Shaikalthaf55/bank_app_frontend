import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
    function handleLogOut(){

        localStorage.removeItem("token")
        navigate("/login",{replace:true})
    }
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:"1px solid #eee"}}>
        <div>
            <Link to="/" style={{textDecoration:"none",fontWeight:700}}></Link>
        </div>
        <div style={{display:"flex", gap:12}}>
            <Link to="/accounts">Accounts</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/profile">profile</Link>
            <button onClick={handleLogOut}>logout</button>
        </div>
    </div>
  )
}

export default Navbar