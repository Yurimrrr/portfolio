var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    var sidebar = document.querySelector(".container").classList.toggle("show-menu");
});