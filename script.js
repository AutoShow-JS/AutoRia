var apiKey = "kxBcXJKhCrmQHLck7hkmT5HuKjPReDajM9h5yTJx";
var user_id = '9684073';
var idArray = [];
var carsForApi = [];
var cars=[];
window.onload = async () => {
  SetMaxLabel();

   //await RequestCarsId();
   //await RequestCarsById();
};
//Added cards 
//получаем id машин
 async function RequestCarsId() {
   let searchUrl = `https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&marka_id=28&with_photo=1`;

   await fetch(searchUrl, {
      method: "GET",
      mode:'cors',
      headers: { 'Content-Type' : 'application/json'}
    })
     .then(async function (response) {
       return response.json();
     })
     .then(function (result) {
       idArray = result.result.search_result.ids;
       console.log(result);
     });
     console.log(idArray);
 }

//получаем инфу о машинах по id
 async function RequestCarsById() {
   
     let infoUrl = `https://developers.ria.com/auto/used/autos/?user_id=${user_id}&api_key=${apiKey}`;

     await fetch(infoUrl, {
      method: "GET",
    })
       .then(async function (response) {
         return await response.json();
       })
      .then(function (result) {
         cars.push(result);
          console.log(cars);
      });
}
//Set max range label
function SetMaxLabel(){
  var max_range = document.getElementById('max-range-label');
  max_range.innerText = document.getElementById('price-range').max;
}
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
      if (parseInt(price[index].innerHTML) >= range.value && parseInt(price[index].innerHTML) <= range.max) {
        console.log(price[index].innerHTML);
        price[index].parentElement.parentElement.parentElement.style = "display: block;";
      } else {
        price[index].parentElement.parentElement.parentElement.style = "display: none;";
      }
    }
  } else {
    for (let index = 0; index < price.length; index++) {
      price[index].parentElement.parentElement.parentElement.style = "display: block;";
    }
  }
}

//фільтр за моделлю
function FilterModel() {
  let model = document.getElementsByClassName("model");

  let searchInput = document.getElementById("model-input").value;

  if (searchInput != "") {
    for (let index = 0; index < model.length; index++) {
      if (model[index].innerHTML.toLowerCase().includes(searchInput.toLowerCase())) 
      {
        model[index].parentElement.parentElement.parentElement.style.display = 'block';
      } 
      else 
      {
        model[index].parentElement.parentElement.parentElement.style.display = 'none';
      }
    }
  } else {
    for (let index = 0; index < model.length; index++) {
      model[index].parentElement.parentElement.parentElement.style.display = "block";
    }
  }
}
