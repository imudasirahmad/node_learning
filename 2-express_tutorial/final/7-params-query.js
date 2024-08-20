const express = require("express");
const path = require("path");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

//this will send all data in products map
// app.get('/api/products' , (req, res) => {
//    res.jsonp(products)
// })

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.jsonp(newProducts);
});

app.get("/api/products/:productId/", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Not Found");
  }
  return res.jsonp(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Not Found");
  }
  return res.jsonp(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products];
  //   console.log(sortedProducts);

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if(sortedProducts.length <1){
    res.status(200).send('No Product Match Your Search');
  }
  res.status(200).jsonp(sortedProducts);
});

app.listen(3000, () => {
  console.log("server is listening  on 3000");
});
