const keys = document.getElementsByTagName("kbd")
const rejectBtn = document.getElementById("reject")
const aceptBtn = document.getElementById("accept")

const mappedKeys = {
    'a': {
        file: "./assets/a.mp3",
        key:keys[0],
    },
    's': {
        file: "./assets/s.mp3",
        key:keys[1],
    },
    'd': {
        file: "./assets/d.mp3",
        key:keys[2],
    },
    'f': {
        file: "./assets/f.mp3",
        key:keys[3],
    },
    'g': {
        file: "./assets/g.mp3",
        key:keys[4]
    },
    'h': {
        file: "./assets/h.mp3",
        key:keys[5],
    },
    'j': {
        file: "./assets/j.mp3",
        key:keys[6],
    },
}

document.addEventListener("keydown", e => {
    mappedKeys[e.key].key.classList.add("pressed")
    const audio = new Audio(mappedKeys[e.key].file)
    audio.play()
})

document.addEventListener("keyup", e => {
    mappedKeys[e.key].key.classList.remove("pressed")
})

rejectBtn.addEventListener('mouseenter', function(e) { randomPosition(e.target) });
rejectBtn.addEventListener('click',() => alert("¡¡¡Gracias por su opinión!!!"))
aceptBtn.addEventListener('click',() => alert("¡¡¡Gracias por su opinión!!!"))
function randomPosition(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (elm.parentElement.offsetHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (elm.parentElement.offsetWidth - elm.offsetWidth) + 'px';
}
