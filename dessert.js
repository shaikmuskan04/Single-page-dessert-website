document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = slides.children;
    let currentIndex = 0;
    const totalSlides = slideImages.length;

    slides.style.width = `${totalSlides * 100}vw`;


    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    
    setInterval(changeSlide, 3000);
});

function changeQuantity(button, increment) {
    const quantityElement = button.parentNode.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity += increment;

    if (quantity < 1) {
        quantity = 1;
    }

    quantityElement.textContent = quantity;
}

function addToCart(itemName, button) {
    const cartItems = document.getElementById('cart_items');
    const quantity = parseInt(button.parentNode.querySelector('.quantity').textContent);

    
    const existingCartItem = Array.from(cartItems.children).find(
        (cartItem) => cartItem.querySelector('.item-name').textContent === itemName
    );

    if (existingCartItem) {
        const cartQuantityElement = existingCartItem.querySelector('.cart-quantity');
        const existingQuantity = parseInt(cartQuantityElement.textContent);
        cartQuantityElement.textContent = existingQuantity + quantity;
    } else {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="item-name">${itemName}</span>
            <span class="cart-quantity">${quantity}</span>
            <button onclick="removeFromCart(this)">Remove</button>
        `;
        cartItems.appendChild(listItem);
    }
}

function removeFromCart(button) {
    const cartItem = button.parentNode;
    cartItem.remove();
}
