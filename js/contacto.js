const containerWhats = document.querySelector(".containerWhats")
const containerInsta = document.querySelector(".containerInsta")
const containerFace = document.querySelector(".containerFace")
const textoWhats = document.querySelector(".textoWhats")
const textoInsta = document.querySelector(".textoInsta")
const textoFace = document.querySelector(".textoFace")

const pantalla = screen.width


function demorarLinkWhats() {
    textoWhats.onclick = () => {
        setTimeout ( () => {
            window.open("https://wa.me/5493512252356")
        }, 750 )
    }
}
demorarLinkWhats()

function demorarLinkInsta() {
    textoInsta.onclick = () => {
        setTimeout ( () => {
            window.open("https://www.instagram.com/shine.bycb/")
        }, 750 )
    }
}
demorarLinkInsta()

function demorarLinkFace() {
    textoFace.onclick = () => {
        setTimeout ( () => {
            window.open("https://www.facebook.com/ShineDanzaBycb")
        }, 750 )
    }
}
demorarLinkFace()


function mostrarWhats() {
    if ( pantalla >= 961 ) {
        containerWhats.onmouseover = () => {
            textoWhats.style.display = "inline"
        }
        containerWhats.onmouseout = () => {
            textoWhats.style.display = "none"
        }
    }
}
mostrarWhats()

function mostrarInsta() {
    if ( pantalla >= 961 ) {
        containerInsta.onmouseover = () => {
            textoInsta.style.display = "inline"
        }
        containerInsta.onmouseout = () => {
            textoInsta.style.display = "none"
        }
    }
}
mostrarInsta()

function mostrarFace() {
    if ( pantalla >= 961 ) {
        containerFace.onmouseover = () => {
            textoFace.style.display = "inline"
        }
        containerFace.onmouseout = () => {
            textoFace.style.display = "none"
        }
    }
}
mostrarFace()