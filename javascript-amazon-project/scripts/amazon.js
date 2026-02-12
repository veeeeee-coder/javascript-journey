//first step was to save the data for every product in an array of objects. Each object has properties like image, name, rating and priceCents. This way we can easily access the data for each product and generate html for it.

const products=[{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating:{
        stars: 4.5,
        count: 87
    },
    priceCents: 1090
}, {
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating:{
        stars: 4,
        count: 127
    },
    priceCents: 2095
},{
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
rating:{
    stars: 4.5,
     count: 56
     },
 priceCents: 799
}];

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
            <select>
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;



});
console.log(productsHTML);
//not that difference is showing but we are generating html w JS and using DOM put html inside amazon.html
document.querySelector('.js-products-grid').innerHTML=productsHTML;