import React,{useState} from "react"
function Login()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
function login()
{ 
    let item={email,password}
    console.warn(item)
} 
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Login page</h1>
            <input type ="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} className ="form-control"/>
            <br/>
            <button onClick={login} className ="btn btn-primary">Login</button>
        </div>
    )
}
export default Login