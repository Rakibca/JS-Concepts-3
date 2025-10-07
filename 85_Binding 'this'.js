const product = {
  name: 'Vanilla Lip Gloss',
  sku: 'w234fg',
  stock: 276,
  getProductInfo: function () {
    console.log(this); // we get 'undefined' OR {name: 'Vanilla Lip Gloss', sku: 'w234fg', stock: 276, getProductInfo: ƒ()}
    console.log(
      `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`
    );
  },
};

product.getProductInfo(); // Stock level for Vanilla Lip Gloss (SKU: w234fg): 276

const productDetails_1 = product.getProductInfo;
productDetails_1(); // !TypeError: Cannot read properties of undefined (reading 'name')

// Instead we can bind the 'this' value of this object 'product'
const productDetails_2 = product.getProductInfo.bind(product);
productDetails_2(); // Stock level for Vanilla Lip Gloss (SKU: w234fg): 276
