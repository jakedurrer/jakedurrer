//Select DOM Items 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');


//Set Initial State of Menu
let showMenu = false; 

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

$('#id4, #id5').hover(function(event) {
    if(event.type === "mouseenter") {
        $(this).attr("controls", "");
        console.log("shalom");
    } else if(event.type === "mouseleave") {
        $(this).removeAttr("controls");
    }
});

$(".button").on("click", function() {
    var modal = $(this).data("modal");
    $(modal).show();
  });
  
$(".modal").on("click", function(e) {
    var className = e.target.className;
    if(className === "modal" || className === "close"){
      $(this).closest(".modal").hide();
    }
});
