// cart.js
const cart = JSON.parse(localStorage.getItem('cart')) || [];

const updateCartCount = () => {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = `(${cart.length})`;
};

const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    updateStock(product.id, -1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};

const removeFromCart = (productId) => {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        const product = cart[productIndex];
        updateStock(product.id, product.quantity);
        cart.splice(productIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
};

const updateStock = async (productId, quantityChange) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}/stock`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantityChange }),
        });
        if (!response.ok) {
            throw new Error('Error actualizando el stock');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

updateCartCount();

export { addToCart, removeFromCart };
