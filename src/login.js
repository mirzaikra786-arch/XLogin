import { useState } from "react";

export default function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [submitted,setSubmitted]=useState(false);
    const [error, setError]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(username==="user" && password==="password"){
          setError("");  
          setSubmitted(true);
        } else {
           setError("Invalid username or password");
           setSubmitted(false);
        }
    };

    return(<>
        <h1 style={{fontFamily:"-apple-system", display:"flex",paddingLeft:"5px",justifyContent:"flex-start"}}>Login Page</h1>
          {submitted ? ( 
            <p>Welcome, {username}!</p>
          ):(<div>
           <div> {error ? (<p>{error}</p>):( "")} </div>
            <form onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input
            type="text"
            placeholder="username"
            value={username}
            id="username"
            onChange={(e)=> setUsername(e.target.value)}
            required/>

          <div>  <label for="password">Password:</label>
            <input
            type="text"
            placeholder="password"
            value={password}
            id="password"
            onChange={(e)=> setPassword(e.target.value)}
            required/> </div>
            
            <button type="submit">Submit</button>
            </form>
         </div>  )}
    </>);
}