var elBtn = document.querySelector(".burger-btn");
var elMenu = document.querySelector(".header-site__menu");

// elBtn.addEventListener("click", function(){
//     elMenu.addclasslist(".menu--open")
    

// })

elBtn.addEventListener("click", function(evt){
    evt.preventDefault()
    elMenu.classList.toggle("menu-open")
})