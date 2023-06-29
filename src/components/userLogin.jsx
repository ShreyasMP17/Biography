import { Navigate, useNavigate } from "react-router-dom";
import "../styles/userLogin.css"

const UserLogin = () => {
    let navigate = useNavigate()
    let login = () => {
        navigate('/user/')
    }
    return (
        <div className="userLogin">
            <div className="back">
            <div className="form_containerr">
                <h1><b> Login as User </b></h1>
                <div className="form_inputt">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" required placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required placeholder="enter password" />
                        </div>
                        <button><b> Login </b></button>
                    </form>
                </div>

            </div>
            </div>
        </div>
    );
}

export default UserLogin;