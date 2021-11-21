// Se añade la clase active de bootstrap en el link de navegación que se haya seleccionado
const navLinks = document.getElementsByClassName("nav-link")
switch (window.location.pathname) {
    case "/":
        navLinks[0].classList.add("active")
        break
    case "/servicios":
        navLinks[1].classList.add("active")
        break
    case "/galeria":
        navLinks[2].classList.add("active")
        break
    case "/bootstrap":
        navLinks[3].classList.add("active")
        break
    case "/reservar":
        navLinks[4].classList.add("active")
        break
    default:
        break
}

// Se agrega la imagen dinamicamente al modal de la galería para mostrar la imagen seleccionada
const galeryImgs = document.getElementsByClassName("galeria-img")
const modalContent = document.getElementById("modalContent")
var modalImg = document.createElement("img")
for (const img of galeryImgs) {
    img.addEventListener("click", () => {
        modalImg.src = img.src
        modalContent.appendChild(modalImg)
    })
}
