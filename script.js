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