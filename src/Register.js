//import axios from "axios";
import React,{useState} from "react"
function Register()
{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
function signUp()
{ 
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user": name,
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/signup", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}    
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>User sign page</h1>
            <input type ="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} className ="form-control"/>
            <br/>
            <button onClick={signUp} className ="btn btn-primary">Sign up</button>
        </div>
    )
}
export default Register