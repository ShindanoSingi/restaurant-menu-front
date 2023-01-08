import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import AddMenu from "./components/AddMenu";
import MenuList from "./components/MenuList";
import UpdateMenu from "./components/UpdateMenu";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-info">
                <link to="/" className="navbar-brand">
                    Restaurant Menu
                </link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/add/"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>
            <div className="container m-10">
                <Routes>
                    <Route path='/' element={<MenuList />} />
                    <Route path='menus' element={<MenuList />} />
                    <Route path="add" element={<AddMenu />} />
                    <Route path="menu/:id/update" element={<UpdateMenu />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
