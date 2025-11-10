import React, { useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token){
      navigate("/dashboard",{replace:true}) 
    }
  },[navigate])
  return (
    <div style={{padding:20}}>
      <h2>Welcome to home Page</h2>
       <p><Link to="/login">go to login</Link></p>
    </div>

  )
}

export default Home