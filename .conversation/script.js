function calculateBudget() {
    const budget = parseFloat(document.getElementById("budget").value);
    const product = document.getElementById("product").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (
        isNaN(budget) ||
        isNaN(price) ||
        isNaN(quantity) ||
        product.trim() === ""
    ) {
        document.getElementById("message").textContent =
            "Please enter all the required details.";
        return;
    }

    const totalCost = price * quantity;
    const remainingBudget = budget - totalCost;

    document.getElementById("productResult").textContent =
        "Product: " + product;

    document.getElementById("totalResult").textContent =
        "Total Cost: ₹" + totalCost.toFixed(2);

    document.getElementById("remainingResult").textContent =
        "Remaining Budget: ₹" + remainingBudget.toFixed(2);

    if (remainingBudget >= 0) {
        document.getElementById("message").textContent =
            "✓ This purchase is within your budget.";
    } else {
        document.getElementById("message").textContent =
            "⚠ Budget exceeded by ₹" + Math.abs(remainingBudget).toFixed(2) +
            ". Consider a cheaper alternative or reduce the quantity.";
    }
}
