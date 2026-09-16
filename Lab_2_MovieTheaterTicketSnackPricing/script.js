// Name: Tugba Safak
// Lab 2: Movie Theater Ticket Pricing Engine
// Date Completed: September 16, 2026

let age = 65;
let ticketPrice = 0;
if (age < 12) {
    ticketPrice = 8.00;
}
else if (age >= 60) {
    ticketPrice = 10.00;
}
else {
    ticketPrice = 14.00;
}
console.log(`=== MOVIE TICKET RECEIPT ===`);
console.log(`Customer Age: ${age}`);
console.log(`Ticket Price: $${ticketPrice}`);
console.log(`============================`);

