const iconMenu = document.querySelector('#catalog');
const containerMenu = document.querySelector('#menu');


function convertMenu() {
  
  if (window.innerWidth <= 480) {
    iconMenu.innerHTML = '<span class="material-symbols-outlined" id="buttonMenu">menu</span>';
    containerMenu.className='menuPhone';
  }else{
    iconMenu.textContent = 'Catalogo';
  }
}


window.addEventListener("load", convertMenu);
window.addEventListener("resize", convertMenu);

function actionsMenu() {
    const buttonMenu = document.querySelector("#buttonMenu");
    const menu = document.querySelector('#menuCatalog')
    const body = document.body;
    if (window.innerWidth <= 480) {
      
      buttonMenu.addEventListener('click', openMenu);
      
      function openMenu(event) {
      
      event.stopPropagation();
      
      if (getComputedStyle(menu).display ==='none') {
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
        body.style.overflow='auto';
      }
    }
  }
}

window.addEventListener("load", actionsMenu) 
window.addEventListener("resize", actionsMenu)

  const products = JSON.parse(localStorage.getItem("productos")) || [
    {
      id: "buso1",
      title: "Buso Negro Nike",
      description: "Comodo para ir de viaje dentro de una ban para jugar basket",
      stock: 3,
      price: "90.000",
      category: "busos",
      image: "assets/images/sudadera1.png",
    },
    {
      id: "buso2",
      title: "Buso Negro",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "busos",
      image: "assets/images/buso2.png",
    },
    {
      id: "buso3",
      title: "Buso Rojo",
      description: "Creado con piel de lagarto",
      stock: 3,
      price: "40.000",
      category: "busos",
      image: "assets/images/buso3.png",
    },
    {
      id: "camisa2",
      title: "Camiseta",
      description: "Ideal para ir a la playa",
      stock: 3,
      price: "30.000",
      category: "camisas",
      image: "assets/images/esqueleto1.png",
    },
    {
      id: "buso4",
      title: "Buso rojo con negro",
      description: "Bueno para salir",
      stock: 3,
      price: "70.000",
      category:"busos",
      image: "assets/images/buso4.png",
    },
    {
      id: "gorra1",
      title: "Gorra Blanca",
      description: "nice",
      stock: 3,
      price: "50.000",
      category: "gorras",
      image: "assets/images/gorra1.png",
    },
    {
      id: "buso5",
      title: "Buso Verde",
      description: "Creado con piel de oso",
      stock: 3,
      price: "60.000",
      category: "busos",
      image: "assets/images/buso5.png",
    },
    {
      id: "gorra2",
      title: "Gorra Negra",
      description: "Creado con piel de gato",
      stock: 3,
      price: "50.000",
      category: "gorras",
      image: "assets/images/gorra2.png",
    },
    {
      id: "gorra3",
      title: "Gorra Roja",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "gorras",
      image: "assets/images/gorra3.png",
    },
    {
      id: "gorra4",
      title: "Gorra Negra",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "gorras",
      image: "assets/images/gorra4.png",
    },
    {
      id: "gorra5",
      title: "Gorra Negra",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "gorras",
      image: "assets/images/gorra5.png",
    },
    {
      id: "pantalon1",
      title: "Pantalon gris",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "pantalones",
      image: "assets/images/pantalon.png",
    },
    {
      id: "pantalon2",
      title: "Pantalon Gris Claro",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "pantalones",
      image: "assets/images/pantalon2.png",
    },
    {
      id: "pantaloneta1",
      title: "Short morado",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "pantalones",
      image: "assets/images/pantaloneta1.png",
    },
    {
      id: "short1",
      title: "Short Rojo",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "pantalones",
      image: "assets/images/short1.png",
    },
    {
      id: "short2",
      title: "Short Azul",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "pantalones",
      image: "assets/images/short2.png",
    },
    {
      id: "short3",
      title: "Short multicolor",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "pantalones",
      image: "assets/images/short3.png",
    },
    {
      id: "short4",
      title: "Short Azul",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "pantalones",
      image: "assets/images/short4.png",
    },
    {
      id: "sudadera1",
      title: "Buso Negro",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "busos",
      image: "assets/images/sudadera1.png",
    },
    {
      id: "sudadera2",
      title: "Buso Rojo",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "busos",
      image: "assets/images/sudadera2.png",
    },
    {
      id: "tenis1",
      title: "Tenis Negro",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis1.png",
    },
    {
      id: "tenis2",
      title: "Tenis Blanco",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis2.png",
    },
    {
      id: "tenis3",
      title: "Tenis Azul",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis3.png",
    },
    {
      id: "tenis4",
      title: "Tenis Azul con Negro",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis4.png",
    },
    {
      id: "tenis5",
      title: "Tenis Azul Claro",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis5.png",
    },
    {
      id: "tenis6",
      title: "Tenis Gris",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis6.png",
    },
    {
      id: "tenis7",
      title: "Tenis Blanco",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis7.png",
    },
    {
      id: "tenis8",
      title: "Buso Negro con morado",
      description: "Creado con piel de oso",
      stock: 3,
      price: "50.000",
      category: "tenis",
      image: "assets/images/tenis8.png",
    },
  ];  

  const buttonForm = document.querySelector("#buttonForm");
  let imgSelect= "";

  const inputID = document.querySelector("#inputID");
  const inputTitle = document.querySelector("#inputTitle")
  const inputDescription = document.querySelector("#inputDescription")
  const inputCategory = document.querySelector("#inputCategory")
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
    const category = inputCategory.value;
    const stock = inputStock.value;
    const price = inputPrice.value;
    const imageName = inputImage.value.split("\\").pop();
    const imageUrl = `assets/images/${imageName}`;
  
  
    const newProduct = {
      id: id,
      title: title,
      description: description,
      category: category,
      stock: stock,
      price: price,
      image: imageUrl,
    };
  
    products.push(newProduct);
    localStorage.setItem("productos", JSON.stringify(products));
  
    inputID.value = "";
    inputTitle.value = "";
    inputDescription.value = "";
    inputCategory.value = "";
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

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const sectionProductsCar = document.querySelector("#sectionProductsCar");

  if (sectionProductsCar) {
    function loadProductsCar() {
      const carEmptySection = document.querySelector(".carEmpty");
      const sectionPrice = document.querySelector(".sectionPrice");
    
      if (carrito.length === 0) {
        carEmptySection.style.display = "block";
        sectionProductsCar.style.display = "none";
        sectionPrice.style.display = "none";
      } else {

        carEmptySection.style.display = "none";
        sectionProductsCar.style.display = "flex";
        sectionPrice.style.display = "block";
      }

      carrito.forEach(product => {

        const containerProducts = document.createElement("div");
        containerProducts.classList.add("containerProducts");
        
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

    let currentValue = parseInt(numberCar.innerHTML) || 0;
    currentValue++;
    valueNumberCar = currentValue;
    localStorage.setItem("keyNumberCar", valueNumberCar);
    numberCar.innerText = localStorage.getItem("keyNumberCar");
    displayNumber();

    const productId = event.target.id;
    const productToAdd = products.find(product => product.id === productId);
  
    if (productToAdd) {
      if (productToAdd.stock > 0) {
        carrito.push(productToAdd);
        localStorage.setItem("carrito", JSON.stringify(carrito));
  
        productToAdd.stock--;
        
        localStorage.setItem("productos", JSON.stringify(products));
        location.reload();
      }
    }
  }
});

if (sectionProducts) {
  function loadProductsNew() {
    products.forEach(product => {
        const soldOut = document.querySelector(".soldOut")
        if (product.stock === 0) {
          soldOut.style.display = "flex";
        }
    })
  }
  loadProductsNew();
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
      const removedProduct = carrito[productToRemoveIndex];
      carrito.splice(productToRemoveIndex, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
  
      
      const productToUpdateIndex = products.findIndex(product => product.id === removedProduct.id);
      if (productToUpdateIndex !== -1) {
        products[productToUpdateIndex].stock++;
        localStorage.setItem("productos", JSON.stringify(products));
      }
  
      location.reload();
    }
  
    let currentValue = parseInt(numberCar.innerHTML);
  
    if (currentValue > 0) {
      currentValue--;
    }
  
    valueNumberCar = currentValue;
  
    localStorage.setItem("keyNumberCar", valueNumberCar);
  
    numberCar.innerText = localStorage.getItem("keyNumberCar");
    displayNumber();

    if (carrito.length === 0) {
      const carEmptySection = document.querySelector(".carEmpty");  
      const sectionResum = document.querySelector(".sectionPrice");

      carEmptySection.style.display = "block";
      sectionProductsCar.style.display = "none";
      sectionResum.style.display = "none";
    }
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

const numberPrice = document.querySelector("#numberPrice") 
const numberSubTotal = document.querySelector("#numberSubTotal") 

document.addEventListener("DOMContentLoaded", () => {

    if (numberPrice || numberSubTotal) {
      function getTotalPrice() {

        let totalPrice = 0;
  
        carrito.forEach(product => {
          totalPrice += parseFloat(product.price) || 0;
        });
  
        if (totalPrice > 0) {
          numberPrice.textContent = `${totalPrice.toFixed(3)}`
          numberSubTotal.textContent = `${totalPrice.toFixed(3)}`
        }else{
          numberPrice.textContent = `0`
          numberSubTotal.textContent = `0`
        }
      }
  
      getTotalPrice();
      location.reload
    }
})

function loadProductsCategory(category) {
  sectionProducts.innerHTML = "";

  products.forEach(product => {
    if (!category || product.category === category) { 
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
    }
  });
}

const inputSearch = document.querySelector('#inputSearch');
const buttonSearch = document.querySelector('#buttonSearch');

if (buttonSearch) {
  buttonSearch.addEventListener("click", () => {
    const searchTerm = inputSearch.value.trim().toLowerCase();
    filterProducts(searchTerm);
  });
}

function filterProducts(searchTerm) {
  sectionProducts.innerHTML = "";

  products.forEach(product => {

    const productName = product.title.toLowerCase();

    if (productName.includes(searchTerm)) {
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
    }
  });
}


const catalogItems = document.querySelectorAll('.liCatalog');

catalogItems.forEach(item => {
  item.addEventListener('click', function() {
    const category = this.id;
    loadProductsCategory(category);
  });
});

function orderProducts(event = "") {

  if (event === 'asc') {
    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (event === 'desc') {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  }

  const sectionProducts = document.querySelector("#sectionProducts");
  if (sectionProducts) {
    sectionProducts.innerHTML = "";
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
}

const ascendet = document.querySelector('#forAscendend');
const descendet = document.querySelector('#forDescend');
const defaul = document.querySelector('#forDefect');
const check1 = document.querySelector('#check1');
const check2 = document.querySelector('#check2');
const check3 = document.querySelector('#check3');

if (defaul) {
  defaul.addEventListener('click', function () {
    check1.style.background = 'white';
    check2.style.background = 'none';
    check3.style.background = 'none';
    location.reload()
  });
}

if (ascendet) {
  ascendet.addEventListener('click', function () {
  orderProducts('asc');
  check2.style.background = 'white';
  check1.style.background = 'none';
  check3.style.background = 'none';
  });
}

if (descendet) {
  descendet.addEventListener('click', function () {
  orderProducts('desc');
  check3.style.background = 'white';
  check1.style.background = 'none';
  check2.style.background = 'none';
  });
}
