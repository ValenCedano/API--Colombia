const botonMenu = document.getElementById("hamburguer");
const modal = document.querySelector(".modal");
const closeButton = document.getElementById("closeModal");
const botonColor = document.getElementById("modoWeb");
const bodyContent = document.body;
const modale= document.getElementsByClassName("contenidoModal");
const imagencambia = document.getElementById("Logo-API");
const selectTheme = document.getElementById("select-theme");
const mododod = document.getElementById("modoWeb2")

console.log(bodyContent);
console.log(botonColor);
console.log(imagencambia);
console.log(modale)
toggleModal(botonMenu,modal);
toggleModal(closeButton,modal);

toggleColor(botonColor,bodyContent,imagencambia);
toggleColor2(selectTheme,modale[0],mododod,bodyContent,imagencambia);



