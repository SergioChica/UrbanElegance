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

document.addEventListener('DOMContentLoaded', function () {
  
  buttonMenu.addEventListener('click', openMenu);

  function openMenu() {
    if (menu.computedStyleMap.display==='none') {
      menu.computedStyleMap.display='flex';
    }else{
      menu.computedStyleMap.display='none';
    }
  }

  document.addEventListener('click', closeMenu(event));

  function closeMenu(event) {
    if (!menu.contains(event.target) && event.target !== buttonMenu) {
      menu.computedStyleMap.display= 'none';
    }
  }
}) 