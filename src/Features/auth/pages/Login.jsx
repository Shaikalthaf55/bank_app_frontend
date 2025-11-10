import { useState } from "react";
import { loginApi } from "../services/authApi";

function Login(){
    const [form,setForm]=useState({email:"",password:""});
    const [loading,setLoading]=useState(false);
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    async function handleLogin(){
        try {
            setLoading(true)
            const res=await loginApi(form)
            console.log("successfully login",res.data);
            if(res.data?.token){
                localStorage.setItem("token",res.data.token)
            }
            alert("logged In")
        } catch (err) {
            console.error(err);
            alert("Login failed");
            
        }finally{
            setLoading(false)
        }
    }
    return(
        <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center" }}>
            <div style={{width:"300px",padding:"20px",border:"2px solid lightGrey",borderRadius:"2px"}}>
                <h2>Login</h2>
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your mail" style={{width:"100%"}} onChange={handleChange}/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" style={{width:"100%"}} onChange={handleChange}/>
                <button style={{width:"100%",padding:10,marginTop:10}} disabled={loading} onClick={handleLogin}>{loading?"logging in":"Login"}</button>
            </div>
        </div>
    )
}
export default Login;