//first step was to save the data for every product in an array of objects. Each object has properties like image, name, rating and priceCents. This way we can easily access the data for each product and generate html for it.(in data file const products = [) <script src="data/products.js"></script>)

  
//3rd step-//combine all this html together(+=) and put it on web page(using DOM)


let productsHTML='';

//2nd step takes each object and saves it in a parameter called product and then we can use that parameter to access the properties of the object so that we can generate html for it,then instead of doing this for every product we insert property names like this(src="{product.image})

products.forEach((product) => {
    productsHTML+= `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;



});
//console.log(productsHTML);
//not that difference is showing but we are generating html w JS and using DOM put html inside amazon.html
document.querySelector('.js-products-grid').innerHTML=productsHTML;
//to make it interactive using add it cart button actually working
const addedMessageTimeouts = {};
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click',() => {
        //console.log('hehe product added');
        const {productId}=button.dataset;

        let matchingItem;

        cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
        });

        const quantitySelector=document.querySelector(`.js-quantity-selector-${productId}`

        );
        const quantity = quantitySelector ? Number(quantitySelector.value) : 1;

        if (matchingItem) {
        matchingItem.quantity += quantity;
        } else {
        cart.push({
            productId,
            quantity
        });
        }
        let cartQuantity=0;
        cart.forEach((item) => {
            cartQuantity+=item.quantity;
        });
        document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
        //console.log(cart);
        const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
      );

            addedMessage.classList.add('added-to-cart-visible');
                const previousTimeoutId = addedMessageTimeouts[productId];
                if (previousTimeoutId) {
            clearTimeout(previousTimeoutId);
        }

        const timeoutId = setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible');
        }, 2000);

        // Save the timeoutId for this product
        // so we can stop it later if we need to.
        addedMessageTimeouts[productId] = timeoutId;
    });
});