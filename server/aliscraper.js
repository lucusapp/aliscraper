const scrape = require('aliexpress-product-scraper-forker');
const product = scrape('4000011196272');

product.then(res => {
  console.log('The JSON: ', res);

});