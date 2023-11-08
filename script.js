var animationDiv = document.querySelector("#foto");

var designer = document.querySelector(".designer");
var developer = document.querySelector(".developer");

animationDiv.addEventListener("mousemove", function(event) {
    var porcentage = (event.clientY / animationDiv.offsetHeight) * 100;

    if (porcentage > 60){
        developer.style.clipPath = "inset(" + (90 - porcentage) + "% 0 0 0)";
        designer.style.clipPath = "inset(0 0 " + (porcentage + 10) + "% 0)";
    } 
    else if (porcentage < 40){
        developer.style.clipPath = "inset(" + (110 - porcentage) + "% 0 0 0)";
        designer.style.clipPath = "inset(0 0 " + (porcentage - 10) + "% 0)";
    }
    else {
        developer.style.clipPath = "inset(" + (100 - porcentage) + "% 0 0 0)";
        designer.style.clipPath = "inset(0 0 " + porcentage + "% 0)";
    }
        
});

animationDiv.addEventListener("mouseout", function() {
    developer.style.clipPath = "inset(50% 0 0 0)";
    designer.style.clipPath = "inset(0 0 50% 0)";
});

var animationDiv2 = document.querySelector("#foto-dark");

var designerdark = document.querySelector(".designer-dark");
var developerdark = document.querySelector(".developer-dark");

animationDiv2.addEventListener("mousemove", function(event) {
    var porcentage = (event.clientY / animationDiv2.offsetHeight) * 100;

    if (porcentage > 60){
        developerdark.style.clipPath = "inset(" + (90 - porcentage) + "% 0 0 0)";
        designerdark.style.clipPath = "inset(0 0 " + (porcentage + 10) + "% 0)";
    } 
    else if (porcentage < 40){
        developerdark.style.clipPath = "inset(" + (110 - porcentage) + "% 0 0 0)";
        designerdark.style.clipPath = "inset(0 0 " + (porcentage - 10) + "% 0)";
    }
    else {
        developerdark.style.clipPath = "inset(" + (100 - porcentage) + "% 0 0 0)";
        designerdark.style.clipPath = "inset(0 0 " + porcentage + "% 0)";
    }
        
});

animationDiv2.addEventListener("mouseout", function() {
    developerdark.style.clipPath = "inset(50% 0 0 0)";
    designerdark.style.clipPath = "inset(0 0 50% 0)";
});


const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

function alterarModo() {
    var botao = document.getElementById("dark-mode-toggle");
    if (botao.textContent === "Modo Escuro") {
        botao.textContent = "Modo Claro";
        // Adicione aqui a lógica para ativar o modo escuro
    } else {
        botao.textContent = "Modo Escuro";
        // Adicione aqui a lógica para desativar o modo escuro
    }
}

