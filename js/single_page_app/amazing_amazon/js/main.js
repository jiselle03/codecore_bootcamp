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
    // Index
    document.querySelector(".navbar").addEventListener("click", event => {
        event.preventDefault();
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            navigateTo(targetPage, link);
        }
    });

    // Show
    const productsContainer = document. querySelector("div.product-list");
    productsContainer.addEventListener("click", event => {
        const productLink = event.target.closest("a.product-link");
        if (productLink) {
            event.preventDefault();
            const { id } = productLink.dataset;
            getAndDisplayProduct(id);
        }
    });

    // New
    const newProductForm = document.querySelector("#new-product-form");
    newProductForm.addEventListener("submit", event => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        const newProduct = {
            title: fd.get("title"),
            description: fd.get("description"),
            price: fd.get("price")
        };

        Product.create(newProduct).then(product => {
            newProductForm.reset();
            getAndDisplayProduct(product.id);
        });
    });

    // Edit & Delete
    document.querySelector("#product-show").addEventListener("click", event => {
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            if (targetPage === "product-delete") {
              // Delete
              Product.destroy(link.getAttribute("data-id")).then(() => {
                // Navigate to index
                navigateTo("product-index");
              });
            } else {
              // Populate product edit form
              populateForm(link.getAttribute("data-id"));
              // Navigate to edit page
              navigateTo(targetPage);
            }
          }
    });

    const editProductForm = document.querySelector("#edit-product-form");
    editProductForm.addEventListener("submit", event => {
        event.preventDefault();

        const fd = new FormData(event.currentTarget);
        const updatedProduct = {
            title: fd.get("title"),
            body: fd.get("body")
        };

        Product.update(fd.get("id"), updatedProduct).then(product => {
            editProductForm.reset();
            getAndDisplayProduct(product.id);
        });
    });

});

// Render Products
const renderProducts = products => {
    const productsContainer = document.querySelector("div.product-list");
    const htmlString = products.map(product => {
        return `
            <a class="item product-link" data-id="${product.id}" href="">
                <span>${product.id} - </span>
                ${product.title} • 
                $${(product.price).toFixed(2)}
            </a>
        `
    }).join("");
    productsContainer.innerHTML = htmlString;
};

// Render a single product on the page
const renderProductDetails = product => {
    const productDetailsContainer = document.querySelector("#product-show");
    const htmlString = `
        <div class="ui segment product-show-container">
            <div class="ui header">${product.title}</div>
            <p>${product.description}</p>
            <p>$${(product.price).toFixed(2)}</p>
            <small>Added by: ${product.seller.full_name}</small>
            <a class="ui small right floated orange button link" data-target="product-edit" data-id="${product.id}" href="">Edit</a>
            <a class="ui small right floated red button link" data-target="product-delete" data-id="${product.id}" href ="">Delete</a>
            <div class="ui segment">
            <h3 class="ui horizontal divider">Reviews</h3>
                <ul class="ui relaxed divided list">
                    ${product.reviews
                        .map(review => `<div class="item"><p>${review.body}</p><p>Rating: ${"⭐".repeat(review.rating)}</p><small>Added by ${review.author.full_name}</small></div>`)
                        .join("")}
                </ul>
            </div>
        </div>
    `;
    productDetailsContainer.innerHTML = htmlString;
};

// Populate Edit Form
const populateForm = id => {
    Product.one(id).then(product => {
        document.querySelector('#edit-product-form [name="id"]').value = product.id;
        document.querySelector('#edit-product-form [name="title"]').value = product.title;
        document.querySelector('#edit-product-form [name="description"]').value = product.description;
        document.querySelector('#edit-product-form [name="price"]').value = product.price;
    });
};

// Fetch all products when Products link is clicked
const refreshProducts = () => Product.all().then(products => renderProducts(products));

// Get one product and navigate to show page
const getAndDisplayProduct = id => {
    Product.one(id).then(product => {
        renderProductDetails(product);
        navigateTo("product-show");
    });
};