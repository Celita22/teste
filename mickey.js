var images = ["Mickey_Mouse.png", "mickey.jpg", "minnie.webp"];
var next = 1;
function mudar() {
    var contem = (next++) % images.length;
    document.getElementById("image").src = "/Aula.js/content/images/" + images[contem];
}