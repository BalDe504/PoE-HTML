var menu_modal = document.getElementById("menu-modal");
var menu_button = document.getElementById("menu-button");
var close_menu = document.getElementsByClassName("close-menu")[0];

var eq = document.getElementById("eq1");
var eq_open = document.getElementById("eq_open");

menu_button.onclick = function(){
    menu_modal.style.display = "block";
}

close_menu.onclick = function(){
    menu_modal.style.display = "none";
}

eq_open.onclick = function(){

    if(eq.style.display == "none"){
        eq.style.display = "flex";
    }
    else{
        eq.style.display = "none";
    }
    
}

window.onclick = function(event){
    if(event.target == menu_modal){
        menu_modal.style.display = "none";
    }

    else if(event.target== eq){
        eq.style.display = "none";
    }
}



