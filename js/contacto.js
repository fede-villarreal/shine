const containerWhats = document.querySelector(".containerWhats")
const containerInsta = document.querySelector(".containerInsta")
const containerFace = document.querySelector(".containerFace")
const textoWhats = document.querySelector(".textoWhats")
const textoInsta = document.querySelector(".textoInsta")
const textoFace = document.querySelector(".textoFace")
const linkWhats = document.querySelector(".linkWhats")
linkWhats.onclick = () => {
    setTimeout ( () => {
        window.open ( "https://wa.me/5493512252356", "_blank" )
    }, 1000 )
}

function mostrarWhats() {
    containerWhats.onmouseover = () => {
        textoWhats.style.display = "inline"
    }
    containerWhats.onmouseout = () => {
        textoWhats.style.display = "none"
    }
}
mostrarWhats()

function mostrarInsta() {
    containerInsta.onmouseover = () => {
        textoInsta.style.display = "inline"
    }
    containerInsta.onmouseout = () => {
        textoInsta.style.display = "none"
    }
}
mostrarInsta()

function mostrarFace() {
    containerFace.onmouseover = () => {
        textoFace.style.display = "inline"
    }
    containerFace.onmouseout = () => {
        textoFace.style.display = "none"
    }
}
mostrarFace()