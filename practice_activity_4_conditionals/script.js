// Declare initial order amount and variables for calculations
let cartTotal = 85.00;
let discount = 0;
let shippingFee = 0;

// Apply dollar discounts based on spending thresholds
if (cartTotal > 100) {
    discount = 20; // $20 off for orders over $100
} else if (cartTotal > 50) {
    discount = 10; // $10 off for orders over $50
} else {
    discount = 0;  // No discount for orders $50 or less
}

// Subtract discount from cart total
cartTotal -= discount;

if (cartTotal >= 75) {
    shippingFee = 0;   // Free shipping over $75
} else {
    shippingFee = 8.00; // Flat rate shipping
}

let finalAmount = cartTotal + shippingFee;

console.log(`Discount Applied: $${discount}`);
console.log(`Subtotal after Discount: $${cartTotal}`);
console.log(`Shipping Fee: $${shippingFee}`);
console.log(`Final Amount Due: $${finalAmount}`);

