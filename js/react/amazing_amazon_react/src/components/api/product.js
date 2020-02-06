import { baseUrl } from "../config";

export const Product = {
    // Fetch all products
    all() {
        return fetch(`${baseUrl}/products`, {
            credencials: "include"
        }).then(res => res.json());
    },
    // Fetch a single product
    one(id) {
        return fetch(`${baseUrl}/products/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },
    // Create a product
    create(params) {
        return fetch(`${baseUrl}/products`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    // Update a product
    update(id, params) {
        return fetch(`${baseUrl}/products/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    // Delete a product
    destroy(id) {
        return fetch(`${baseUrl}/products/${id}`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};