function calculateTotal(price, quantity) {
    let total = price * quantity;
    return total;
}

function displayBill(name, price, quantity) {
    let total = calculateTotal(price, quantity);

    console.log("Customer Name:", name);
    console.log("Price:", price);
    console.log("Quantity:", quantity);
    console.log("Total Amount:", total);
}

displayBill("Pavan", 100, 3);
displayBill("Rahul", 150, 2);