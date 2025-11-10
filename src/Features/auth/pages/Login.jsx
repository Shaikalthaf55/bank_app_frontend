function Login(){
    return(
        <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center" }}>
            <div style={{width:"300px",padding:"20px",border:"2px solid lightGrey",borderRadius:"2px"}}>
                <h2>Login</h2>
                <label>Email</label>
                <input type="text" placeholder="Enter your mail" style={{width:"100%"}}/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" style={{width:"100%"}}/>
                <button style={{width:"100%",padding:10,marginTop:10}}>Login</button>
            </div>
        </div>
    )
}
export default Login;