import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css"

const AdminLogin = () => {
    let login=(s)=>{
        s.preventDefault();
        let data={email,password} // data from input

        //admin validation
        if(email=="admin@gmail.com" && password == 1234){
            navigate('/admin')
        }else{
            alert("Invalid credentials")
        }
    }

    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let navigate=useNavigate()
    return ( 
        <div className="adminLogin">
            <div className="back">
            <div className="form_containerr">
                <h1><b> Login as Admin </b></h1>
                <div className="form_inputt">
                    <form onSubmit={login}>
                        <div className="email">
                        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address"/>
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(m)=>setPassword(m.target.value)} placeholder="enter password" />
                        </div>
                        <button><b> Login </b></button>
                    </form>
                </div>
                
            </div>
            </div>
        </div>
     );
}
 
export default AdminLogin;