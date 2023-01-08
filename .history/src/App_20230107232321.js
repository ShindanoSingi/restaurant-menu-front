
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import AddMenu from "./components/AddMenu";
import MenuList from "./components/MenuList";
import UpdateMenu from "./components/UpdateMenu";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-info">
                <a href="/" className="navbar-brand">
                    Restaurant Menu
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/add/"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>
            <div>
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
