const buttonMenu = document.querySelector('#catalog');

function convertMenu() {
  if (window.innerWidth <= 480 ) {
    buttonMenu.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  }else{
    buttonMenu.textContent = 'Catalogo';
  }
}

window.addEventListener("load", convertMenu);
window.addEventListener("resize", convertMenu);

const menu = document.querySelector('#menuCatalog')
const body = document.body;

window.addEventListener('load', function () {
  
  buttonMenu.addEventListener('click', openMenu);

  function openMenu() {
    if (menu.style.display =='none') {
      menu.style.display='flex';
      body.style.overflow='hidden';
    }else{
      menu.style.display='none';
    }
  }

  document.addEventListener('click', closeMenu);

  function closeMenu(event) {
    if (!menu.contains(event.target) && event.target !== buttonMenu) {
      menu.style.display= 'none';
      body.style.overflow='scroll';
    }
  }

}) 