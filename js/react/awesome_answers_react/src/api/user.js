import { baseUrl } from "../config";
import { findDOMNode } from "react-dom";

export const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            method: "GET",
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch (`${baseUrl}/users`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    update(params) {
        return fetch (`${baseUrl}/users/current`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};
