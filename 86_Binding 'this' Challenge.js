const button = document.getElementById('btn');

const product = {
  name: 'Vanilla Lip Gloss',
  sku: 'w234fg',
  stock: 276,
  getProductInfo: function () {
    console.log(this); // <button id='btn'>
    console.log(
      `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`
    );
  },
};

//button.addEventListener('click', product.getProductInfo); // when we click, we get "Stock level for (SKU: undefined): undefined"

/*
Challenge 1:
  What is the 'this' value of 'product.getProductInfo' as we
  are using it now in the eventListener?
  
  Answer: The element that was clicked: "<button id='btn'>"
*/

/*
Challenge 2:
  Debug the code so it works as intended.
*/

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

button.addEventListener('click', product.getProductInfo.bind(product)); // Stock level for Vanilla Lip Gloss (SKU: w234fg): 276
