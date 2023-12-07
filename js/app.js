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

// PART ADD PRODUCTS
  const products = JSON.parse(localStorage.getItem("productos")) || [];
  
  const buttonForm = document.querySelector("#buttonForm");
  let imgSelect= "";

  const inputID = document.querySelector("#inputID");
  const inputTitle = document.querySelector("#inputTitle")
  const inputDescription = document.querySelector("#inputDescription")
  const inputStock = document.querySelector("#inputStock")
  const inputPrice = document.querySelector("#inputPrice")
  const inputImage = document.querySelector("#inputImage");
  const previewImage = document.getElementById("previewImage");
  
  if (buttonForm) {
    buttonForm.addEventListener("click", addProducts);
  }

  if (inputImage) {
    inputImage.addEventListener("change", viewImg);
  }

  function viewImg() {
    const file = inputImage.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  function addProducts() {
    const id = inputID.value;
    const title = inputTitle.value;
    const description = inputDescription.value;
    const stock = inputStock.value;
    const price = inputPrice.value;
    const imageName = inputImage.value.split("\\").pop();
    const imageUrl = `assets/images/${imageName}`;
  
  
    const newProduct = {
      id: id,
      title: title,
      description: description,
      stock: stock,
      price: price,
      image: imageUrl, // Utiliza la URL de la imagen
    };
  
    products.push(newProduct);
    localStorage.setItem("productos", JSON.stringify(products));
  
    inputID.value = "";
    inputTitle.value = "";
    inputDescription.value = "";
    inputStock.value = "";
    inputPrice.value = "";
    inputImage.value = "";
    previewImage.style.display = "none";
  }
  
  console.log(products);

  const sectionProducts = document.querySelector("#sectionProducts");
  if (sectionProducts) {
    function loadProducts() {
      products.forEach(product => {

      const div = document.createElement("div");
      div.classList.add("containerProducts");

      const divSoldOut = document.createElement("div");
      divSoldOut.classList.add("soldOut");
      div.append(divSoldOut);


      const imgSoldOut = document.createElement("img");
      imgSoldOut.classList.add("imageSoldOut");
      imgSoldOut.setAttribute("src", "assets/images/agotado.png")
      divSoldOut.append(imgSoldOut);

      const divContainerImage = document.createElement("div");
      divContainerImage.classList.add("containerImage");
      div.append(divContainerImage);

      const divImage = document.createElement("div");
      divImage.classList.add("image");
      divContainerImage.append(divImage);

      const img = document.createElement("img");
      img.setAttribute("src", product.image);
      divImage.append(img);

      const divContainerAttributesProducts = document.createElement("div");
      divContainerAttributesProducts.classList.add("containerAttributesProducts");
      div.append(divContainerAttributesProducts);

      const divAttributesProducts = document.createElement("div");
      divAttributesProducts.classList.add("AttributesProducts");
      divContainerAttributesProducts.append(divAttributesProducts);

      const txtName = document.createElement("h3");
      txtName.textContent = product.title;
      txtName.classList.add("txtName");
      divAttributesProducts.append(txtName);

      const txtDiscribe = document.createElement("p");
      txtDiscribe.textContent = product.description;
      txtDiscribe.classList.add("txtDiscribe");
      divAttributesProducts.append(txtDiscribe);

      const txtStock = document.createElement("p");
      txtStock.textContent = `Stock ${product.stock}`;
      txtStock.classList.add("txtStock");
      divAttributesProducts.append(txtStock);

      const txtPrice = document.createElement("p");
      txtPrice.textContent = `$${product.price} COL`;
      txtPrice.classList.add("txtPrice");
      divAttributesProducts.append(txtPrice);

      const divContainerButtonCarProducts = document.createElement("div");
      divContainerButtonCarProducts.classList.add("containerButtonCarProducts");
      div.append(divContainerButtonCarProducts);

      const divButtonCarProducts = document.createElement("div");
      divButtonCarProducts.classList.add("buttonCarProducts");
      divContainerButtonCarProducts.append(divButtonCarProducts);

      const buttonProducts = document.createElement("button");
      buttonProducts.innerHTML = 'Añadir al carrito <ion-icon name="cart-outline"></ion-icon>';
      buttonProducts.setAttribute("id", product.id);
      buttonProducts.classList.add("buttonProducts");
      divButtonCarProducts.append(buttonProducts);

      sectionProducts.append(div);
    });
  } 
  loadProducts();
}

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const sectionProductsCar = document.querySelector("#sectionProductsCar");

  if (sectionProductsCar) {
    function loadProductsCar() {
      carrito.forEach(product => {

        const containerProducts = document.createElement("div");
        containerProducts.classList.add("containerProducts");

        const soldOut = document.createElement("div");
        soldOut.classList.add("soldOut");
        containerProducts.append(soldOut);

        const imgSoldOut = document.createElement("img");
        imgSoldOut.classList.add("imageSoldOut");
        imgSoldOut.setAttribute("src", "assets/images/agotado.png")
        soldOut.append(imgSoldOut);
        
        const containerImage = document.createElement("div");
        containerImage.classList.add("containerImage");
        containerProducts.append(containerImage);

        const image = document.createElement("div");
        image.classList.add("image");
        containerImage.append(image);

        const img = document.createElement("img");
        img.setAttribute("src", product.image);
        image.append(img);

        const containerAttributesProducts = document.createElement("div");
        containerAttributesProducts.classList.add("containerAttributesProducts");
        containerProducts.append(containerAttributesProducts);

        const divAttributesProducts = document.createElement("div");
        divAttributesProducts.classList.add("AttributesProducts");
        containerAttributesProducts.append(divAttributesProducts);

        const txtName = document.createElement("h3");
        txtName.textContent = product.title;
        txtName.classList.add("txtName");
        divAttributesProducts.append(txtName);

        const txtDiscribe = document.createElement("p");
        txtDiscribe.textContent = product.description;
        txtDiscribe.classList.add("txtDiscribe");
        divAttributesProducts.append(txtDiscribe);

        const containerPriceAndDelete = document.createElement("div");
        containerPriceAndDelete.classList.add("containerPriceAndDelete");
        divAttributesProducts.append(containerPriceAndDelete);

        const button = document.createElement("button");
        button.classList.add("buttonDelete");
        button.setAttribute("id", product.id);
        button.textContent ="Eliminar";
        containerPriceAndDelete.append(button);

        const txtPrice = document.createElement("p");
        txtPrice.textContent = `$${product.price} COL`;
        txtPrice.classList.add("txtPrice");
        containerPriceAndDelete.append(txtPrice);

        sectionProductsCar.append(containerProducts);
      });
  }
loadProductsCar();
}

const containerNumberCar = document.querySelector("#containerNumberCar");
const numberCar = document.querySelector("#numberCar");
const soldOut = document.querySelector("#soldOut");

document.addEventListener("DOMContentLoaded", displayNumber);

document.addEventListener("DOMContentLoaded", () => {
  const buttonsProducts = document.querySelectorAll(".buttonProducts");

  if (buttonsProducts.length > 0) {
    buttonsProducts.forEach((button) => {
      button.addEventListener("click", increase);
    });
  }

  function increase(event) {
    const productId = event.target.id;
    const productToAdd = products.find(product => product.id === productId);
  
    if (productToAdd) {
      if (productToAdd.stock > 0) {
        carrito.push(productToAdd);
        localStorage.setItem("carrito", JSON.stringify(carrito));
  
        productToAdd.stock--;
        
        localStorage.setItem("productos", JSON.stringify(products));
        
        let currentValue = parseInt(numberCar.innerHTML);
        currentValue++;
        valueNumberCar = currentValue;
        localStorage.setItem("keyNumberCar", valueNumberCar);
        numberCar.innerText = localStorage.getItem("keyNumberCar");
        displayNumber();
        loadProductsNew();
        location.reload();
      }
    }
  }
});

if (sectionProducts) {
  function loadProductsNew() {
    carrito.forEach(product => {
  
      const containerProducts = document.createElement("div");
      containerProducts.classList.add("containerProducts");

      const soldOut = document.createElement("div");
      soldOut.classList.add("soldOut");
      containerProducts.append(soldOut);

      const imgSoldOut = document.createElement("img");
      imgSoldOut.classList.add("imageSoldOut");
      imgSoldOut.setAttribute("src", "assets/images/agotado.png")
      soldOut.append(imgSoldOut);

      if (product.stock === 0) {
        soldOut.style.display = 'flex';
      }
      
      const containerImage = document.createElement("div");
      containerImage.classList.add("containerImage");
      containerProducts.append(containerImage);
  
      const image = document.createElement("div");
      image.classList.add("image");
      containerImage.append(image);
  
      const img = document.createElement("img");
      img.setAttribute("src", product.image);
      image.append(img);
  
      const containerAttributesProducts = document.createElement("div");
      containerAttributesProducts.classList.add("containerAttributesProducts");
      containerProducts.append(containerAttributesProducts);
  
      const divAttributesProducts = document.createElement("div");
      divAttributesProducts.classList.add("AttributesProducts");
      containerAttributesProducts.append(divAttributesProducts);
  
      const txtName = document.createElement("h3");
      txtName.textContent = product.title;
      txtName.classList.add("txtName");
      divAttributesProducts.append(txtName);
  
      const txtDiscribe = document.createElement("p");
      txtDiscribe.textContent = product.description;
      txtDiscribe.classList.add("txtDiscribe");
      divAttributesProducts.append(txtDiscribe);
  
      const containerPriceAndDelete = document.createElement("div");
      containerPriceAndDelete.classList.add("containerPriceAndDelete");
      divAttributesProducts.append(containerPriceAndDelete);
  
      const button = document.createElement("button");
      button.classList.add("buttonDelete");
      button.setAttribute("id", product.id);
      button.textContent ="Delete";
      containerPriceAndDelete.append(button);
  
      const txtPrice = document.createElement("p");
      txtPrice.textContent = `$${product.price} COL`;
      txtPrice.classList.add("txtPrice");
      containerPriceAndDelete.append(txtPrice);
  
      sectionProductsCar.append(containerProducts);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
    
  const buttonDelete = document.querySelectorAll(".buttonDelete");

  if (buttonDelete.length > 0) {
    buttonDelete.forEach((button) => {
      button.addEventListener("click", decrease);
    });
  }

  function decrease(event) {
    const productId = event.target.id;
    const productToRemoveIndex = carrito.findIndex(product => product.id === productId);

    if (productToRemoveIndex !== -1) {
      carrito.splice(productToRemoveIndex, 1); // Elimina el producto del carrito
      localStorage.setItem("carrito", JSON.stringify(carrito));
      location.reload();
    }

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