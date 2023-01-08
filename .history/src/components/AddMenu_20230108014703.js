import axios from "axios";
import React, { useState } from "react";
import { baseURL, headers } from "./../services/menu.service";
export const AddMenu = () => {
    const initialMenuState = {
        id: null,
        name: "",
        description: "",
        price: 0,
    };
    const [menu, setMenu] = useState(initialMenuState);
    const [submitted, setSubmitted] = useState(false);
    const handleMenuChange = (e) => {
        const { name, value } = e.target;
        setMenu({ ...menu, [name]: value });
    };
    const submitMenu = () => {
        let data = {
            name: menu.name,
            description: menu.description,
            price: menu.price,
        };
        axios
            .post(`${baseURL}/menu/`, data, {
                headers: {
                    headers,
                },
            })
            .then((response) => {
                setMenu({
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
        setMenu(initialMenuState);
        setSubmitted(false);
    };
    return (
        // ...
      );
};
