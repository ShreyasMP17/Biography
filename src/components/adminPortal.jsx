import { Routes,Route } from "react-router-dom";
import PageNotFound from "./404";
import AddBook from "./addBook";
import AddUser from "./addUser";
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserList from "./userList";

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/star-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/star-list/:id" element={<ReadBook/>}/>
                <Route path="/add-star" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminPortal;