const saleCards = document.querySelector(".sales-cards");
const salesRight = document.querySelector(".sales-right");
const categoryContainer = document.querySelector(".category-cards");
const furnitureContainer = document.querySelector(".furniture-cards");

const saleProducts = [
    {
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmVsdmV0JTIwTG92ZXNlYXR8ZW58MHx8MHx8fDA%3D",
        title: "Wooden Sofa",
        price: "$899",
        discount: "-25%"
    },
    {
        img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
        title: "Leather Recliner",
        price: "$1199",
        discount: "-15%"
    },
    {
        img: "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9kZXJuJTIwQXJtY2hhaXJ8ZW58MHx8MHx8fDA%3D",
        title: "Modern Armchair",
        price: "$549",
        discount: "-10%"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1676321688606-2f3b026710a5?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29ybmVyJTIwU2VjdGlvbmFsfGVufDB8fDB8fHww",
        title: "Corner Sectional",
        price: "$1599",
        discount: "-30%"
    },
    {
        img: "https://images.unsplash.com/photo-1655149555296-bad157279d8d?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VmVsdmV0JTIwTG92ZXNlYXR8ZW58MHx8MHx8fDA%3D",
        title: "Velvet Loveseat",
        price: "$749",
        discount: "-20%"
    }
];

const categoryProducts = [
    {
        img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Kitchen"
    },
    {
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkfGVufDB8fDB8fHww",
        title: "Bedroom"
    },
    {
        img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60",
        title: "Living Room"
    },
    {
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=60",
        title: "Kitchen"
    },
    {
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=60",
        title: "Dining Room"
    },
    {
        img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop&q=60",
        title: "Office"
    }
];

const furnitureItems = [
    {
        img: "https://plus.unsplash.com/premium_photo-1683141392308-aaa39d916686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHYlMjBsb3VuZ2V8ZW58MHx8MHx8fDA%3D",
        discount: "-30%",
        category: "Tv Lounge",
        title: "Modern TV Set",
        discountedPrice: "$899",
        originalPrice: "$1200"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1764260243040-76a196162e0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FiaW5zJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
        discount: "-20%",
        category: "Kitchen",
        title: "Modern Wooden Kitchen style",
        discountedPrice: "$1099",
        originalPrice: "$1399"
    },
    {
        img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60",
        discount: "-15%",
        category: "Chairs",
        title: "Oak wood chair",
        discountedPrice: "$749",
        originalPrice: "$899"
    },
    {
        img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        discount: "-25%",
        category: "Beds",
        title: "Upholstered platform bed frame",
        discountedPrice: "$999",
        originalPrice: "$1299"
    }
];

function saleProduct(){
    saleProducts.forEach(product => {

    const salesCard = document.createElement("div");
    salesCard.classList.add("sales-card");

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.title;

    const salescardText = document.createElement("div");
    salescardText.classList.add("sales-card-text");

    const h5 = document.createElement("h5");
    h5.textContent = product.title;

    const span = document.createElement("span");
    span.textContent = product.price;

    const p = document.createElement("p");
    p.textContent = product.discount;

    salescardText.append(h5, span, p);
    salesCard.append(img, salescardText);
    saleCards.appendChild(salesCard);
});
}
saleProduct();

function categoryProduct(){
    categoryProducts.forEach(category => {

    const wrapper = document.createElement("div");
    wrapper.classList.add("category-item");

    const categoryCard = document.createElement("div");
    categoryCard.classList.add("category-card");

    const img = document.createElement("img");
    img.src = category.img;
    img.alt = category.title;

    const span = document.createElement("span");
    span.textContent = category.title;

    categoryCard.appendChild(img);
    wrapper.append(categoryCard, span);
    categoryContainer.appendChild(wrapper);
});
}
categoryProduct();

function furnitureProduct(){
    furnitureItems.forEach(item => {

    const furnitureCard = document.createElement("div");
    furnitureCard.classList.add("furniture-card");

    const furnitureImg = document.createElement("div");
    furnitureImg.classList.add("furniture-img");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    const eyeIcon = document.createElement("i");
    eyeIcon.classList.add("ri-eye-line");

    const discountSpan = document.createElement("span");
    discountSpan.textContent = item.discount;

    furnitureImg.append(img, eyeIcon, discountSpan);

    const furnitureText = document.createElement("div");
    furnitureText.classList.add("furniture-text");

    const h3 = document.createElement("h3");
    h3.textContent = item.category;

    const p = document.createElement("p");
    p.textContent = item.title;

    const rupeeBox = document.createElement("div");
    rupeeBox.classList.add("rupee-box");

    const priceBox = document.createElement("div");
    priceBox.classList.add("price-box");

    const discountedPrice = document.createElement("span");
    discountedPrice.classList.add("discounted-price");
    discountedPrice.textContent = item.discountedPrice;

    const originalPrice = document.createElement("span");
    originalPrice.classList.add("original-price");
    originalPrice.textContent = item.originalPrice;

    priceBox.append(discountedPrice, originalPrice);

    const cartIcon = document.createElement("i");
    cartIcon.classList.add("ri-shopping-cart-2-line");

    rupeeBox.append(priceBox, cartIcon);

    furnitureText.append(h3, p, rupeeBox);

    furnitureCard.append(furnitureImg, furnitureText);

    furnitureContainer.appendChild(furnitureCard);
});
}
furnitureProduct();