import Aguila from "./aguila.js";
import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";

// Función asíncrona para consultar la información de la API, desde el inicio del sitio
(async function () {
    try {
        const Request = await fetch("animales.json");
        const response = await Request.json();
        let resultados = response.animales;
        listadoAnimales = Object.values(resultados);
        let optionsConcat = '<option disabled selected value="">Seleccione un animal</option>';
        listadoAnimales.forEach((element, index) => {
            optionsConcat += `<option value="${index}">${element.name}</option>`;
        })
        inputAnimal.innerHTML = optionsConcat;
    } catch (e) {
        console.error(e);
        listadoAnimales = [];
    }
})();

// Guardar en variables los elementos principales a usar
const inputAnimal = document.querySelector("#animal");
const inputEdadAnimal = document.querySelector("#edad");
const inputComentarios = document.querySelector("#comentarios");
const espacioPreview = document.querySelector("#preview");
const btnGRegistrar = document.querySelector("#btnRegistrar");
const tablaAnimales = document.querySelector("#Animales");
let listadoAnimales;
const listadoTablaDeAnimales = [];

// Funcion para formatear el Form
const formatearForm = () => {
    inputAnimal.value = "";
    inputEdadAnimal.value = "";
    inputComentarios.value = "";
    espacioPreview.innerHTML = "";
};

// Función que imprime en la Tabla los datos de los Animales guardados
const postearTarjetaAnimal = (informacion) => {
    let bodyInfoAnimales = '';
    informacion.forEach((animal, index) => {
        switch (animal.Nombre) {
            case 'Leon':
                bodyInfoAnimales += `
                    <div class="card-animal">
                        <div class="card-img" data-animal="${index}" style="background-image:url(assets/imgs/${animal.Img})"></div>
                        <div class="footer-sound" onclick="${animal.Rugir(index)}">
                            <i class="fas fa-volume-up"></i>
                            <audio id="player${index}" src="assets/sounds/${animal.Sonido}"></audio>
                        </div>
                    </div>
                `;
                break;
            case 'Lobo':
                bodyInfoAnimales += `
                    <div class="card-animal">
                        <div class="card-img" data-animal="${index}" style="background-image:url(assets/imgs/${animal.Img})"></div>
                        <div class="footer-sound" onclick="${animal.Aullar(index)}">
                            <i class="fas fa-volume-up"></i>
                            <audio id="player${index}" src="assets/sounds/${animal.Sonido}"></audio>
                        </div>
                    </div>
                `;
                break;
            case 'Oso':
                bodyInfoAnimales += `
                    <div class="card-animal">
                        <div class="card-img" data-animal="${index}" style="background-image:url(assets/imgs/${animal.Img})"></div>
                        <div class="footer-sound" onclick="${animal.Gruñir(index)}">
                            <i class="fas fa-volume-up"></i>
                            <audio id="player${index}" src="assets/sounds/${animal.Sonido}"></audio>
                        </div>
                    </div>
                `;
                break;
            case 'Serpiente':
                bodyInfoAnimales += `
                    <div class="card-animal">
                        <div class="card-img" data-animal="${index}" style="background-image:url(assets/imgs/${animal.Img})"></div>
                        <div class="footer-sound" onclick="${animal.Sisear(index)}">
                            <i class="fas fa-volume-up"></i>
                            <audio id="player${index}" src="assets/sounds/${animal.Sonido}"></audio>
                        </div>
                    </div>
                `;
                break;
            case 'Aguila':
                bodyInfoAnimales += `
                    <div class="card-animal">
                        <div class="card-img" data-animal="${index}" style="background-image:url(assets/imgs/${animal.Img})"></div>
                        <div class="footer-sound" onclick="${animal.Chillar(index)}">
                            <i class="fas fa-volume-up"></i>
                            <audio id="player${index}" src="assets/sounds/${animal.Sonido}"></audio>
                        </div>
                    </div>
                `;
                break;
            default:
                alert("Este animal no existe");
        }
    })
    tablaAnimales.innerHTML = bodyInfoAnimales;
}

// EventListener que permite cargar la imagen preview cada vez que se cambia el animal
inputAnimal.addEventListener("change", () => {
    let valorInputAnimal = inputAnimal.value;
    let imagenAnimal = listadoAnimales[valorInputAnimal].imagen;
    espacioPreview.innerHTML = `<img src="assets/imgs/${imagenAnimal}" class="d-block mx-auto"></img>`
})

// EventListener que controla el boton Guardar Info
btnGRegistrar.addEventListener("click", () => {
    let validarAnimal = true;
    let validarEdad = true;
    let validarComentario = true;
    if (inputAnimal.value == "") {
        $("#animalHelp").html("Por favor selecciona una opción.")
        validarAnimal = false;
    } else {
        $("#animalHelp").html("")
        validarAnimal = true;
    }
    if (inputEdadAnimal.value == "") {
        $("#edadHelp").html("Por favor selecciona una opción.")
        validarEdad = false;
    } else {
        $("#edadHelp").html("")
        validarEdad = true;
    }
    if (inputComentarios.value == "") {
        $("#comentariosHelp").html("Por favor ingrese algún comentario válido.")
        validarComentario = false;
    } else {
        $("#comentariosHelp").html("")
        validarComentario = true;
    }
    if (validarAnimal && validarEdad && validarComentario) {
        let indexAnimal = inputAnimal.value;
        let infoAnimalElegido = listadoAnimales[indexAnimal];
        let animalCreado;
        switch (infoAnimalElegido.name) {
            case 'Leon':
                animalCreado = new Leon(infoAnimalElegido.name, inputEdadAnimal.value, infoAnimalElegido.imagen, inputComentarios.value, infoAnimalElegido.sonido);
                break;
            case 'Lobo':
                animalCreado = new Lobo(infoAnimalElegido.name, inputEdadAnimal.value, infoAnimalElegido.imagen, inputComentarios.value, infoAnimalElegido.sonido);
                break;
            case 'Oso':
                animalCreado = new Oso(infoAnimalElegido.name, inputEdadAnimal.value, infoAnimalElegido.imagen, inputComentarios.value, infoAnimalElegido.sonido);
                break;
            case 'Serpiente':
                animalCreado = new Serpiente(infoAnimalElegido.name, inputEdadAnimal.value, infoAnimalElegido.imagen, inputComentarios.value, infoAnimalElegido.sonido);
                break;
            case 'Aguila':
                animalCreado = new Aguila(infoAnimalElegido.name, inputEdadAnimal.value, infoAnimalElegido.imagen, inputComentarios.value, infoAnimalElegido.sonido);
                break;
            default:
                alert("Este animal no existe");
        }
        listadoTablaDeAnimales.push(animalCreado);
        console.log(listadoTablaDeAnimales);
        postearTarjetaAnimal(listadoTablaDeAnimales);
        formatearForm();
        activarModal(listadoTablaDeAnimales);
    }
})

// Función que permite guardar crear EventListener para cada card creada
const activarModal = (plantillaAnimal) => {
    plantillaAnimal.forEach((elemento, index) => {
        let textoClase = `.card-img[data-animal="${index}"]`;
        let nuevoEvento = document.querySelector(textoClase);
        nuevoEvento.addEventListener("click", ()=>{
            let elementModal = document.querySelector("#modalInformativo .modal-body");
            let script = `
                <img src="assets/imgs/${elemento.Img}">
                <p class="text-center text-white"><b>${elemento.Edad}</b></p>
                <p class="text-center text-white"><b>Comentarios</b></p>
                <hr>
                <p class="text-center text-white">${elemento.Comentarios}</p>`;
            elementModal.innerHTML = script;
            $("#modalInformativo").modal('show');
        })
    })
}