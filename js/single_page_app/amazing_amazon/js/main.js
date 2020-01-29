// Sessions
const baseUrl = "http://localhost:3000/api/v1";
const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

Session.create({ email: "noone@winterfell.gov", password: "supersecret" });

// Requests
const Product = {
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

// Navigation
const navigateTo = (id, clickedLink) => {
    if (id === "product-index") {
        refreshProducts();
    };

    document.querySelectorAll(".page").forEach(node => {
        node.classList.remove("active");
    });

    document.querySelector(`.page#${id}`).classList.add("active");

    if (clickedLink) {
        document.querySelectorAll(".navbar a").forEach(link => {
            link.classList.remove("active");
        });

        clickedLink.classList.add("active");
    };
};

// Event listener for navbar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".navbar").addEventListener("click", event => {
        event.preventDefault();
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            navigateTo(targetPage, link);
        }
    });
});

// Fetch all products when Products link is clicked
const refreshProducts = () => Product.all().then(products => renderProducts(products));

// Render Products
const renderProducts = products => {
    const productsContainer = document.querySelector("div.product-list");
    const htmlString = products.map(product => {
        return `
            <a class="item product-link" data-id="${product.id}" href="">
                <span>${product.id} - </span>
                ${product.title}
            </a>
        `
    }).join("");
    productsContainer.innerHTML = htmlString;
};