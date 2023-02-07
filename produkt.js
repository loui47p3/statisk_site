/* produktsiden */

// lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
// find id
console.log(urlParams);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#produktnavn").textContent = produkt.productdisplayname;
  document.querySelector("#produktpris").textContent = produkt.price;
  document.querySelector("#produktnavn2").textContent = produkt.productdisplayname;
  document.querySelector("#produktmærke").textContent = produkt.brandname;
  document.querySelector("img").src = imagePath;
}

hentData();
