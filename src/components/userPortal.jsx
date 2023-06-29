import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";

const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
                <Route  path="/" element={<UserDashboard/>}/>
                <Route path="/star-list" element={<BookList/>}/>
                <Route path="/star-list/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;