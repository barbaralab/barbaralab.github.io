// Get reference to the Salé button
var saleButton = document.getElementById("sale");
var sucreButton = document.getElementById("sucre");

// Add click event listener to the Salé button
saleButton.addEventListener("click", function() {
    // Redirect to the desired page when Salé button is clicked
    window.location.href = "liste_sale.html";
});

// Add click event listener to the Salé button
sucreButton.addEventListener("click", function() {
    // Redirect to the desired page when Salé button is clicked
    window.location.href = "liste_sucre.html";
});
