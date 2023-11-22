const iconMenu = document.querySelector('#catalog');
const containerMenu = document.querySelector('#menu');

function convertMenu() {
  if (window.innerWidth <= 480 ) {
    iconMenu.innerHTML = '<span class="material-symbols-outlined" id="buttonMenu">menu</span>';
    containerMenu.className='menuPhone';
  }else{
    iconMenu.textContent = 'Catalogo';
  }
}

window.addEventListener("load", convertMenu);
window.addEventListener("resize", convertMenu);


window.addEventListener("load", function () {
  
  const buttonMenu = document.querySelector("#buttonMenu");
  const menu = document.querySelector('#menuCatalog')
  const body = document.body;

  buttonMenu.addEventListener('click', openMenu);
  
  function openMenu() {
    if (getComputedStyle(menu).display ==='none') {
      menu.style.display='flex';
      body.style.overflow='hidden';
    }else{
      menu.syle.display='none';
    }
  }

  document.addEventListener('click', closeMenu);

  function closeMenu(event) {
    if (!menu.contains(event.target) && event.target !== buttonMenu) {
      menu.style.display= 'none';
      body.style.overflow='auto';
    }
  }

});