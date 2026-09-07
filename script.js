// Cart count

let cartCount = 0;


// Add product to cart

function addToCart(productName, price) {

    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;

    alert(productName + " added to cart!");
}


// Search products

function searchProducts() {

    let searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    let products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        let productName =
            product
            .querySelector("h2")
            .innerText
            .toLowerCase();


        if (productName.includes(searchText)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// Filter products

function filterProducts(category) {

    let products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        let productCategory =
            product.getAttribute("data-category");


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}