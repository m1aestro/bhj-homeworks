let productAdd = document.querySelectorAll(".product__add");
let productQuantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
let productQuantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
let productQuantityValue = document.querySelectorAll(".product__quantity-value");
let cartProducts = document.querySelector(".cart__products");
let productImage = document.querySelectorAll(".product__image");
let product = document.querySelectorAll(".product");
let listProduct = [];

productQuantityControlDec.forEach((item, index) => {
    item.addEventListener("click", () => {
        let element = productQuantityValue[index];
            if(element.textContent > 1) {
                element.textContent--
            }
    });
});

productQuantityControlInc.forEach((item,index) => {
    item.addEventListener("click", () => {
        let element = productQuantityValue[index];
            element.textContent++
    });
});

productAdd.forEach((item, index) => {
    item.addEventListener("click", () => {
        let id = product[index].getAttribute("data-id");
        
        if (listProduct[id]) {
            listProduct[id].textContent = Number(productQuantityValue[index].textContent) + Number(listProduct[id].textContent);
            return;
        }

        let cartProduct = document.createElement("div");
        let cartProductImage = document.createElement("img");
        let cartProductCount = document.createElement("div");

        cartProduct.setAttribute("data-id", id);
        cartProduct.classList.add("cart__product");

        cartProductImage.src = productImage[index].src;
        
        cartProductImage.classList.add("cart__product-image");
        cartProductCount.classList.add("cart__product-count");

        cartProductCount.textContent = productQuantityValue[index].textContent;

        cartProduct.appendChild(cartProductImage);
        cartProduct.appendChild(cartProductCount);
        cartProducts.appendChild(cartProduct);

        listProduct[id] = cartProductCount;
    });
});