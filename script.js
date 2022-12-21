var apiKey = "OeyqbA5bhCQHbHfjVsYjRsudRopUIJymPkoJ8RRe";
var idArray = [];
var cars = [];

window.onload = async () => {
  // await RequestCarsId(0);
  // await RequestCarsById();
};

//получаем id машин
// async function RequestCarsId() {
//   let searchUrl = `https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&marka_id=28&with_photo=1`;

//   await fetch(searchUrl, {
//     method: "GET",
//   })
//     .then(async function (response) {
//       return response.json();
//     })
//     .then(function (result) {
//       idArray = result.result.search_result.ids;
//       //console.log(result);
//     });
// }

//получаем инфу о машинах по id
// async function RequestCarsById() {
//   idArray.forEach(async (element) => {
//     let infoUrl = `https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${element}`;

//     await fetch(infoUrl, {
//       method: "GET",
//     })
//       .then(async function (response) {
//         return await response.json();
//       })
//       .then(function (result) {
//         cars.push(result);
//         console.log(cars);
//       });
//   });
// }

//фільтр за ціною
function ChangeLabel() {
  let range = document.getElementById("price-range");
  document.getElementById("range-label").innerHTML = range.value;
}
function FilterPrice() {
  let price = document.getElementsByClassName("price");
  let range = document.getElementById("price-range");

  if (range.value != 0) {
    for (let index = 0; index < price.length; index++) {
      if (
        parseInt(price[index].innerHTML) >= range.value &&
        parseInt(price[index].innerHTML) <= range.max
      ) {
        price[index].parentElement.style = "display: flex;";
      } else {
        price[index].parentElement.style = "display: none;";
      }
    }
  } else {
    for (let index = 0; index < price.length; index++) {
      price[index].parentElement.style = "display: block;";
    }
  }
}

//фільтр за моделлю
function FilterModel() {
  let model = document.getElementsByClassName("model");
  let searchInput = document.getElementById("model-input").value;
  if (searchInput != "") {
    for (let index = 0; index < model.length; index++) {
      if (
        model[index].innerHTML.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        model[index].parentElement.style = "display: flex;";
      } else {
        model[index].parentElement.style = "display: none;";
      }
    }
  } else {
    for (let index = 0; index < model.length; index++) {
      model[index].parentElement.style = "display: block;";
    }
  }
}
