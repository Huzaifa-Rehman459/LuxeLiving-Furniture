const stored = sessionStorage.getItem("selectedProduct");

if (stored) {
    const product = JSON.parse(stored);

    document.querySelector(".right-product h1").textContent = product.category;
    document.querySelector(".right-product p").textContent = product.title;
    document.querySelector(".price-box .sale-price").textContent = product.discountedPrice;
    document.querySelector(".price-box .real-price").textContent = product.originalPrice;
    document.querySelector(".left-product img").src = product.img;
    document.querySelector(".left-product img").alt = product.title;
} else {
    console.warn("No product found in storage");
}