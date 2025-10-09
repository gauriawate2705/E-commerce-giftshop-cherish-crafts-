// Runs when page loads
window.onload = function () {
    console.log("Welcome to Gift Shop Home Page!");
};
// Redirect functions
document.getElementById("bouquetsBtn").onclick = function () {
    window.location.href = "bouquets.html";
};
document.getElementById("hampersBtn").onclick = function () {
    window.location.href = "hampers.html";
};
document.getElementById("framesBtn").onclick = function () {
    window.location.href = "frames.html";
};
// Show message popup
document.getElementById("quoteBtn").onclick = function () {
    alert("Bloom your way with the best gifts 💐✨");
};