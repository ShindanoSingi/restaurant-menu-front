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
        retrieAllMenus();
    }, [countRef]);

    const retrieAllMenus = () => {
        axios.get(`${baseURL}/menu/}`, {
            headers: {
                headers,
            },
        })
            .then((response) => {
                setMenus(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const deleteMenu = (id) => {
        axios.delete(`${baseURL}/menus/${id}`, {
            headers: {
                headers,
            }
        })
            .then((response) => {
                setDele
            })
    }

    return (
        <div className='container'>

        </div>
    )
}

export default MenuList