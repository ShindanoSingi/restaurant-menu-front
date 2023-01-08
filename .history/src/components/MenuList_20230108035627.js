import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { baseURL, headers } from './services/menu.service'
import { useNavigate } from 'react-router-dom'


function MenuList() {
    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();
    const countRef = useRef(0);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        retrieveAllMenus();
        console.log(countRef)
    }, [countRef]);

    const retrieveAllMenus = () => {
        axios.get(`${baseURL}/menu`)
            .then((response) => {
                setMenus(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    console.log(menus)

    const deleteMenu = (id) => {
        axios.delete(`${baseURL}/menu/${id}`)
            .then((response) => {
                setDeleted(true);
                retrieveAllMenus();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleUpdateClick = (id) => {
        navigate(`/menu/${id}/update`);
    }

    return (
        <div className="row justify-content-center">
            <div className="col">
                {deleted && (
                    <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                    >
                        Menu deleted!
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
                {menus &&
                    menus.map((menu, index) => (
                        <div key={index} className="card my-3 min-w-25 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">{menu.name}</h2>
                                <h4 className="card-subtitle mb-2">{menu.price}</h4>
                                <p className="card-text">{menu.description}</p>
                            </div>
                            <div className="card-footer">
                                <div
                                    className="btn-group justify-content-around w-75 mb-1 "
                                    data-toggle="buttons"
                                >
                                    <span>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => handleUpdateClick(menu.id)}
                                        >
                                            Update
                                        </button>
                                    </span>
                                    <span>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteMenu(menu.id)}
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default MenuList