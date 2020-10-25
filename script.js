
//dimmes screen when the nav-bar is expanded (it workes fine without)
const checkbox = document.getElementById('hidden_menu_checkbox')
const dimmer = document.getElementById('dimmer')
function dim(){
    dimmer.style.display = (checkbox.checked?'block':'none');
}
function dimmerClicked(){
    checkbox.checked=false;
    dim()
}


//gives special styling top link to current page
var path = window.location.pathname;
var page = path.split("/").pop();
document.querySelectorAll('a[href="'+page+'"]').forEach(function(elem){elem.className += ' current-link'});