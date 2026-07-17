const furnitureContainer = document.querySelector(".furniture-cards");
const searchInput = document.querySelector(".furniture-header input");

const furnitureItems = [
  {
    img: "https://plus.unsplash.com/premium_photo-1683141392308-aaa39d916686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHYlMjBsb3VuZ2V8ZW58MHx8MHx8fDA%3D",
    discount: "-30%",
    category: "Tv Lounge",
    title: "Modern TV Set",
    discountedPrice: "$899",
    originalPrice: "$1200",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1764260243040-76a196162e0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FiaW5zJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    discount: "-20%",
    category: "Kitchen",
    title: "Modern Wooden Kitchen style",
    discountedPrice: "$1099",
    originalPrice: "$1399",
  },
  {
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60",
    discount: "-15%",
    category: "Chairs",
    title: "Oak wood chair",
    discountedPrice: "$749",
    originalPrice: "$899",
  },
  {
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    discount: "-25%",
    category: "Beds",
    title: "Upholstered platform bed frame",
    discountedPrice: "$999",
    originalPrice: "$1299",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
    discount: "-40%",
    category: "Library",
    title: "Library Designs",
    discountedPrice: "$829",
    originalPrice: "$1400",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mYSUyMG1vZGVybnxlbnwwfHwwfHx8MA%3D%3D",
    discount: "+8%",
    category: "Sofa",
    title: "Modern Wool Sofa",
    discountedPrice: "$200",
    originalPrice: "$180",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yfGVufDB8fDB8fHww",
    discount: "+50%",
    category: "Aprtments",
    title: "Wooden Structure Dorm",
    discountedPrice: "$900",
    originalPrice: "$450",
  },
  {
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww",
    discount: "+70%",
    category: "Office",
    title: "Modern Windows",
    discountedPrice: "$999",
    originalPrice: "$830",
  },
  {
    img: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2t8ZW58MHx8MHx8fDA%3D",
    discount: "-35%",
    category: "Desks",
    title: "Oak Wooden Table",
    discountedPrice: "$350",
    originalPrice: "$600",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661317296820-16fd638ee06f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiaW5ldHxlbnwwfHwwfHx8MA%3D%3D",
    discount: "-60%",
    category: "Kitchen",
    title: "Kitchen Cabinets",
    discountedPrice: "$310",
    originalPrice: "$1000",
  },
];
function renderFurniture(items) {
  furnitureContainer.innerHTML = "";

  items.forEach((item) => {
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

    cartIcon.addEventListener("click", () => {
      sessionStorage.setItem("selectedProduct", JSON.stringify(item));
      window.location.href = "cartProduct.html";
    });

    rupeeBox.append(priceBox, cartIcon);

    furnitureText.append(h3, p, rupeeBox);

    furnitureCard.append(furnitureImg, furnitureText);

    furnitureContainer.appendChild(furnitureCard);
  });
}
renderFurniture(furnitureItems);
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = furnitureItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query),
  );

  renderFurniture(filtered);
});