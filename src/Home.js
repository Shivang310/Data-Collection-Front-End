import React,{useState} from "react"
function Home()
{
    const[Website_Base_Url,setWebsite_Base_Url]=useState("");
    const[Bot_id,setBot_id]=useState("");
    const[Bot_Type,setBot_Type]=useState("");
    const[Function_Name,setFunction_Name]=useState("");
    const[Next_Run,setNext_Run]=useState("");
    const[Refresh_Interval_In_Days,setRefresh_Interval_In_Days]=useState("");
function scrape()
{ 
    let item={Website_Base_Url,Bot_id,Bot_Type,Function_Name,Next_Run,Refresh_Interval_In_Days}
    console.warn(item)
} 
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Home page</h1>
            <input type ="text" value={Website_Base_Url} placeholder="Website_Base_Url" onChange={(e)=>setWebsite_Base_Url(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="text" value={Bot_id} placeholder="Bot_id" onChange={(e)=>setBot_id(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="text" value={Bot_Type} placeholder="Bot_Type" onChange={(e)=>setBot_Type(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="text" value={Function_Name} placeholder="Function_Name" onChange={(e)=>setFunction_Name(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="text" value={Next_Run} placeholder="Next_Run" onChange={(e)=>setNext_Run(e.target.value)} className ="form-control"/>
            <br/>
            <input type ="text" value={Refresh_Interval_In_Days} placeholder="Refresh_Interval_In_Days" onChange={(e)=>setRefresh_Interval_In_Days(e.target.value)} className ="form-control"/>
            <br/>
            <button onClick={scrape} className ="btn btn-primary">Add Job</button>
        </div>
    )
}
export default Home