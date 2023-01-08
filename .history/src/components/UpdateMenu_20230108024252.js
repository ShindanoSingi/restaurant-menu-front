import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { baseURL, headers } from "./../services/menu.service";
export const UpdateMenu = () => {
    const initialMenuState = {
        id: null,
        name: "",
        description: "",
        price: 0,
    };
    let { id } = useParams();
    const [currentMenu, setCurrentMenu] = useState(initialMenuState);
    const [submitted, setSubmitted] = useState(false);
    const countRef = useRef(0);
    useEffect(() => {
        retrieveMenu();
    }, [countRef]);
    const handleMenuChange = (e) => {
        const { name, value } = e.target;
        setCurrentMenu({ ...currentMenu, [name]: value });
    };
    const retrieveMenu = () => {
        axios
            .get(`${baseURL}/menu/${id}/`, {
                headers: {
                    headers,
                },
            })
            .then((response) => {
                setCurrentMenu({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                });
                console.log(currentMenu);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const updateMenu = () => {
        let data = {
            name: currentMenu.name,
            description: currentMenu.description,
            price: currentMenu.price,
        };
        axios
            .put(`${baseURL}/menu/${id}/`, data, {
                headers: {
                    headers,
                },
            })
            .then((response) => {
                setCurrentMenu({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const newMenu = () => {
        setCurrentMenu(initialMenuState);
        setSubmitted(false);
    };
    return (
          // ...
      );
};