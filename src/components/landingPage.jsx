import "../styles/landingPage.css"
import { Link } from "react-router-dom";
const LandingPage = () => {

    return ( 
        <div className="main">
            <div className="new">
        <div className="landingPage">    
            <img src="./images/main3.png" alt="" />
            <div className="selectLogin">
                <div className="adm"> 
                <img height="110" width="150" src="./images/lg4.jpg" alt="" /> <br />
                <Link to="/admin-login" id="one">Admin Login</Link></div>
                <div className="use">
                <img height="110" width="150" src="./images/lg4.jpg" alt="" /><br />
                <Link to="/user-login"id="two">User Login</Link></div>
                </div> 
                 </div>
                 </div>
                  </div>
     );
}
 
export default LandingPage;