const menu = document.querySelector('#catalog');

function convertMenu() {
  if (window.innerWidth <= 480 ) {
    menu.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  }else{
    menu.textContent = 'Catalogo';
  }
}

window.addEventListener("load", convertMenu);
window.addEventListener("resize", convertMenu);