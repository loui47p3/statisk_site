// https://kea-alt-del.dk/t7/api/products

//1. hent data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products");
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
  copy.querySelector(".price").textContent = product.price + ",-";

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".discounted p").textContent = Math.round(product.price - (product.price * product.discount) / 100) + ",-";
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
