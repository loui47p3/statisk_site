// https://kea-alt-del.dk/t7/api/products

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");

const url = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${cat}`;

document.querySelector("h2").textContent = cat;

//1. hent data
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  //2. loope //3. for hvert af dem skal jeg
  data.forEach(showProduct);
}
getData();

function showProduct(product) {
  console.log(product);
  // 4. fange vores template
  const template = document.querySelector("#smallProductTemplate").content;
  // 5. clone
  const copy = template.cloneNode(true);
  // 6. skifte data
  copy.querySelector("a").href = "produkt.html?id=" + product.id;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  copy.querySelector(".subtle").textContent = product.articletype + " | " + product.brandname;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".discounted p").textContent = "DKK " + Math.round(product.price - (product.price * product.discount) / 100) + ",-";
  copy.querySelector(".discounted p+p").textContent = product.discount + "%";

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  // 7. appende
  document.querySelector("main").appendChild(copy);
}

/*
{
  "id": 1529,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Tee",
  "price": 1899,
  "discount": null,
  "brandname": "Puma",
  "soldout": 0
}
*/
