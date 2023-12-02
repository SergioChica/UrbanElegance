const iconMenu = document.querySelector('#catalog');
const containerMenu = document.querySelector('#menu');

//Function to convert the menu
function convertMenu() {
  //If the width is less than 480px we change iconMenu to hamburger menu icon and change the class of the menu div, otherwise we leave the icon menu normal and do not change the class.
  if (window.innerWidth <= 480) {
    iconMenu.innerHTML = '<span class="material-symbols-outlined" id="buttonMenu">menu</span>';
    containerMenu.className='menuPhone';
  }else{
    iconMenu.textContent = 'Catalogo';
  }
}

//Activate when the window loads.
window.addEventListener("load", convertMenu);
//Activate when the window size is changed.
window.addEventListener("resize", convertMenu);

//Function to activate menu actions.
function actionsMenu() {
    const buttonMenu = document.querySelector("#buttonMenu");
    const menu = document.querySelector('#menuCatalog')
    const body = document.body;
    if (window.innerWidth <= 480) {
      
      //Event to open the menu.
      buttonMenu.addEventListener('click', openMenu);
      
      //Function to open menu.
      function openMenu(event) {
      //We stop the propagation of the event
      event.stopPropagation();
      //If menu has a display in none we give a display flex to make visible the menu and we apply an overflow hidden to the body to remove the scroll to the page, if not we leave in display none and we do not remove scroll of the page.
      if (getComputedStyle(menu).display ==='none') {
        menu.style.display='flex';
        body.style.overflow='hidden';
      }else{
        menu.style.display='none';
      }
    }
    
    //Event to close the menu.
    document.addEventListener('click', closeMenu);
    
    //Function to close the menu
    function closeMenu(event) {
      //If we click on a place outside the menu we give display none to the menu to close the menu and we give overflow auto to the body so that it is possible to make scroll in the page.
      if (!menu.contains(event.target) && event.target !== buttonMenu) {
        menu.style.display= 'none';
        body.style.overflow='auto';
      }
    }
  }
}

//Activate when the window is loads.
window.addEventListener("load", actionsMenu) 
//Activate when the window size is changed.
window.addEventListener("resize", actionsMenu)

const containerNumberCar = document.querySelector("#containerNumberCar");
const numberCar = document.querySelector("#numberCar");

document.addEventListener("DOMContentLoaded", displayNumber);

document.addEventListener("DOMContentLoaded", () =>{
  
  const buttonProducts = document.querySelector("#buttonProducts");
  buttonProducts.addEventListener("click", increase)
  
  function increase() {
    let currentValue = parseInt(numberCar.innerHTML);
    
    currentValue++
    
    valueNumberCar = currentValue
    
    localStorage.setItem("keyNumberCar", valueNumberCar);
    
    numberCar.innerText = localStorage.getItem("keyNumberCar");
    displayNumber()
  }
})

document.addEventListener("DOMContentLoaded", () => {
    
  const buttonDelete = document.querySelector("#buttonDelete");
  buttonDelete.addEventListener("click", decrease)

  function decrease() {
    let currentValue = parseInt(numberCar.innerHTML);
    
    if (currentValue > 0) {
      currentValue--
    }
      
    valueNumberCar = currentValue

    localStorage.setItem("keyNumberCar", valueNumberCar);

    numberCar.innerText = localStorage.getItem("keyNumberCar");
    displayNumber()
  }

})

function displayNumber() {
  if (localStorage.getItem("keyNumberCar") != "NaN") {
    numberCar.innerHTML = localStorage.getItem("keyNumberCar")
  }else{
    localStorage.setItem("keyNumberCar", 0);
    numberCar.innerHTML = localStorage.getItem("keyNumberCar")
  }

  let currentValue = parseInt(numberCar.innerHTML);

  if (currentValue > 0) {
    containerNumberCar.style.display = "block";
  } else {
    containerNumberCar.style.display = "none";
  }
  
}

// PART ADD PRODUCTS

const productos = [

    {
      id: "pantaloneta1",
      title: "Pantaloneta morada",
      imagen: "../assets/images/pantaloneta1.png",
      description: "La propia pa meterle al soccer",
      precio:"90.000"
    },

    {
      id: "pantaloneta1",
      title: "Pantaloneta morada",
      imagen: "../assets/images/pantaloneta1.png",
      description: "La propia pa meterle al soccer",
      precio:"90.000"
    },

    {
      id: "esqueleto1",
      title: "Esqueleto morada",
      imagen: "../assets/images/esqueleto1.png",
      description: "Comoda para salir a tomar el sol ademas de funcionar como buen equipamiento para basketboll",
      precio:"90.000"
    }

]

const sectionProducts = document.querySelector("#sectionProducts")

function loadProducts() {
  productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("containerProducts");
      div.innerHTML = `
      
        <div class="soldOut">
        <img src="assets/images/agotado.png" alt="Agotado" class="imageSoldOut">
        </div>
        <div class="containerImage">
        <div class="image">
        <img src="${producto.imagen}" alt="${producto.title}">
        </div>
      </div>
      <div class="containerAttributesProducts">
      <div class="AttributesProducts">
      <h3 class="txtName">
        ${producto.title}
      </h3>
      <p class="txtDiscribe">
        ${producto.description}
      </p>
          <p class="txtStock">Stock 0</p>
          <p class="txtPrice">${producto.precio}</p>
          </div>
          </div>
          <div class="containerButtonCarProducts">
          <div class="buttonCarProducts">
          <button class="buttonProducts" >
          Añadir al carrito
          <ion-icon name="cart-outline"></ion-icon>
          </button>
          </div>
          </div>
        
        `;

        sectionProducts.append(div)
  })
}

loadProducts();