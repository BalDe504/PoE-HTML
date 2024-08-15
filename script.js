var menu_modal = document.getElementById("menu-modal");
var menu_button = document.getElementById("menu-button");
var close_menu = document.getElementsByClassName("close-menu")[0];

menu_button.onclick = function(){
    menu_modal.style.display = "block";
}

close_menu.onclick = function(){
    menu_modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == menu_modal){
        menu_modal.style.display = "none";
    }
}

