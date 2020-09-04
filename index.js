const inputNombre = document.querySelector("#name")
const formulario = document.querySelector("form")
const erNombre = document.querySelector("#error-nombre")

inputNombre.placeholder = "Hola, desde Js"



// formulario.onsubmit = () => {
//     alert("Enviado")
// }
// preventDefault - validar antes de enviar

formulario.onsubmit = (e) => {
    e.preventDefault();

    console.log(inputNombre.value)

    if (inputNombre.value.length < 5) {
        erNombre.textContent = "Tu nombre es muy corto."
        inputNombre.classList.add("input-error")

    }
}

// antes de enviar  : cuando usario tira foco del form
inputNombre.onblur = () => {
    if (inputNombre.value.length < 5) {
        erNombre.textContent = "Corto"
        inputNombre.classList.add("input-error")
    }
}