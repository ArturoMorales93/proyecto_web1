/*
    Se añade la clase active de bootstrap en el link de navegación que se haya seleccionado.
    Se busca cuál es el path activo, para buscar el link que tiene ese path y añadirle la clase.
*/
const navLinks = document.getElementsByClassName("nav-link")
if (navLinks.length != 0) {
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
}

/*
    Se agrega la imagen dinamicamente al modal de la galería para mostrar la imagen seleccionada.
    Se le agrega el evento click a todas las imagenes, y cada que se hace click, se settea el src
    de una imagen en blanco con el src de la imagen que se le hizo click. Y luego la imagen setteada
    se agrega como hijo al contenedor del modal.
*/
const galeryImgs = document.getElementsByClassName("galeria-img")
const modalContent = document.getElementById("modalContent123")
const modalImg = document.createElement("img")
if (galeryImgs.length != 0 && modalContent != null) {
    for (const img of galeryImgs) {
        img.addEventListener("click", () => {
            modalImg.src = img.src
            modalContent.appendChild(modalImg)
        })
    }
}

/*
    Se calcula el total del monto a pagar para la confirmación de la reserva.
    Se settean los precios de acuerdo a lo seleccionado en el servicio y se
    agregan eventos para que se calcule nuevamente en cada cambio de selección
    y de cantidad de adultos y niños.
*/
const servicioInput = document.getElementById("servicio")
const adultosInput = document.getElementById("cantAdultos")
const niniosInput = document.getElementById("cantNinios")
const totalLabel = document.getElementById("total")
const resetBtn = document.getElementById("reset")
// Precios de los servicios
const precioServicios = {
    servicio1: 100,
    servicio2: 150,
    servicio3: 200,
    servicio4: 225
}
// Se calcula el monto total multiplicando el precio con las cantidades de los inputs
const calcularTotal = () => {
    total = precio * adultosInput.value
    total += (precio / 2) * niniosInput.value
    totalLabel.innerText = total
}
// Se settea el precio de acuerdo a la opción seleccionada del select
const setPrecio = () => {
    switch (servicioInput.selectedIndex) {
        case 1:
            precio = precioServicios.servicio1
            break
        case 2:
            precio = precioServicios.servicio2
            break
        case 3:
            precio = precioServicios.servicio3
            break
        case 4:
            precio = precioServicios.servicio4
            break
        default:
            precio = 0
            break
    }
    calcularTotal()
    return precio
}
if (servicioInput != null && adultosInput != null && niniosInput != null && totalLabel != null) {
    var total = 0
    var precio = setPrecio()
    // Settea el precio cada que se cambia la opción del select
    servicioInput.addEventListener("change", () => {
        setPrecio()
    })

    // Se settea el total cada que se cambia la cantidad de adultos
    adultosInput.addEventListener("change", () => {
        calcularTotal()
    })

    // Se settea el total cada que se cambia la cantidad de niños
    niniosInput.addEventListener("change", () => {
        calcularTotal()
    })
}

// Se limpia el total cuando se preciona el botón de reset
if (resetBtn != null) {
    resetBtn.addEventListener("click", () => {
        total = 0
        precio = 0
        calcularTotal()
    })
}
