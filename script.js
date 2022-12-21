var apiKey = "kxBcXJKhCrmQHLck7hkmT5HuKjPReDajM9h5yTJx";
var user_id = "9684073";
var idArray = [];
var carsForApi = [];


const gearBoxType = {
  Auto:1,
  Manual:2
}
const EngineType = {
  Fuel:1,
  Gas:2,
  Electro:3,
  Diezel:4,
  Symbiot:5
}
var cars=[
  {manufacture:"Honda",
  model:"eNS1 Dynamic" , 
  price:"31690" , 
  gearBox:1 , 
  engine:3 ,
  img:"source/img/honda_ens1.png"},

  {manufacture:"Honda",
  model:"CR-V 2010" , 
  price:"10699 " , 
  gearBox:1 , 
  engine:1 ,
  img:"source/img/honda_cr-v.png"},

  {manufacture:"Honda",
  model:"CR-V 2014" , 
  price:"16100" , 
  gearBox:1 , 
  engine:1 ,
  img:"source/img/honda_cr-v2014.png"},

  {manufacture:"Honda",
  model:"CR-V 2007" , 
  price:"10699" , 
  gearBox:2 , 
  engine:1 ,
  img:"source/img/honda_cr-v-2007bx.png"},

  {manufacture:"Honda ",
  model:"M-NV PREMIUM 2022" , 
  price:"26500 " , 
  gearBox:1 , 
  engine:3 ,
  img:"source/img/honda_m-nv2022bx.png"}
];
window.onload = async () => {
  SetMaxLabel();
    Init();
   //await RequestCarsId();
   //await RequestCarsById();
};
//Added cards 
function Init(){
  cars.forEach(car => {
      var div_container = document.createElement('div');
      var div_card = document.createElement('div');
      var div_imgBx = document.createElement('div');
      var img = document.createElement('img');
      var div_contentBx = document.createElement('div');
      var h1_car_manufacture = document.createElement('h1');
      var h2_model = document.createElement('h2');
      var div_size = document.createElement('div');
      var h3_label_price = document.createElement('h3');
      var span_price = document.createElement('span');
      var div_color = document.createElement('div');
      var h3_label_gearbox = document.createElement('h3');
      var span_typegearbox = document.createElement('span');
      var a = document.createElement('a');

      document.getElementById('grid').appendChild(div_container);
      div_container.className = "container";
      div_container.appendChild(div_card);
      div_card.className = "card";
      div_card.style.content = car.manufacture;
      div_card.appendChild(div_imgBx);
      div_imgBx.className = "imgBx";
      div_imgBx.appendChild(img);
      img.src = car.img;
      div_card.appendChild(div_contentBx);
      div_contentBx.className = "contentBx"
      div_contentBx.appendChild(h1_car_manufacture);
      h1_car_manufacture.className = "car_manufacture";
      h1_car_manufacture.innerText = car.manufacture;
      h1_car_manufacture.style.display = "none";
      div_contentBx.appendChild(h2_model);
      h2_model.className = "model";
      h2_model.innerText = car.model;
      div_contentBx.appendChild(div_size);
      div_size.className = "size";
      div_size.appendChild(h3_label_price);
      h3_label_price.innerText = "Price: ";
      h3_label_price.className = "price_h3";
      div_size.appendChild(span_price);
      span_price.className = "price";
      span_price.innerText = car.price;
      div_contentBx.appendChild(div_color);
      div_color.className = "color";
      div_color.appendChild(h3_label_gearbox);
      h3_label_gearbox.className = "label_gearbox_h3";
      h3_label_gearbox.innerText = "Gearbox: ";
      div_color.appendChild(span_typegearbox);
      span_typegearbox.className = "typegearbox";
      span_typegearbox.innerText = car.gearBox == 1?"Auto":"Manual";
      div_contentBx.appendChild(a);
      a.href = "#";
      a.innerText = "Buy now";
  }); 
}
//получаем id машин
//  async function RequestCarsId() {
//    let searchUrl = `https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&marka_id=28&with_photo=1`;

//    await fetch(searchUrl, {
//       method: "GET",
//       mode:'cors',
//       headers: { 'Content-Type' : 'application/json'}
//     })
//      .then(async function (response) {
//        return response.json();
//      })
//      .then(function (result) {
//        idArray = result.result.search_result.ids;
//        console.log(result);
//      });
//      console.log(idArray);
//}

//получаем инфу о машинах по id
//  async function RequestCarsById() {

//      let infoUrl = `https://developers.ria.com/auto/used/autos/?user_id=${user_id}&api_key=${apiKey}`;

//      await fetch(infoUrl, {
//       method: "GET",
//     })
//        .then(async function (response) {
//          return await response.json();
//        })
//       .then(function (result) {
//          cars.push(result);
//           console.log(cars);
//       });
// }

//Set max range label
function SetMaxLabel() {
  var max_range = document.getElementById("max-range-label");
  max_range.innerText = document.getElementById("price-range").max;
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
      if (
        parseInt(price[index].innerHTML) >= range.value &&
        parseInt(price[index].innerHTML) <= range.max
      ) {
        console.log(price[index].innerHTML);
        price[
          index
        ].parentElement.parentElement.parentElement.parentElement.style =
          "display: block;";
      } else {
        price[
          index
        ].parentElement.parentElement.parentElement.parentElement.style =
          "display: none;";
      }
    }
  } else {
    for (let index = 0; index < price.length; index++) {
      price[
        index
      ].parentElement.parentElement.parentElement.parentElement.style =
        "display: block;";
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
        model[index].parentElement.parentElement.parentElement.style.display =
          "block";
      } else {
        model[index].parentElement.parentElement.parentElement.style.display =
          "none";
      }
    }
  } else {
    for (let index = 0; index < model.length; index++) {
      model[index].parentElement.parentElement.parentElement.style.display =
        "block";
    }
  }
}

//фільтр типу
function FilterGirbox() {
  let type = document.getElementsByClassName("typegearbox");
  let autoBox = document.getElementById("auto").checked;
  let mechanicsBox = document.getElementById("mechanics").checked;

  if (autoBox || mechanicsBox) {
    for (let index = 0; index < type.length; index++) {
      if (autoBox && type[index].innerHTML.toLowerCase().includes("auto")) {
        type[
          index
        ].parentElement.parentElement.parentElement.parentElement.style.display =
          "block";
      } else if (
        mechanicsBox &&
        type[index].innerHTML.toLowerCase().includes("manual")
      ) {
        type[
          index
        ].parentElement.parentElement.parentElement.parentElement.style.display =
          "block";
      } else if (mechanicsBox && autoBox) {
        type[
          index
        ].parentElement.parentElement.parentElement.parentElement.style.display =
          "block";
      } else {
        type[
          index
        ].parentElement.parentElement.parentElement.parentElement.style.display =
          "none";
      }
    }
  } else {
    for (let index = 0; index < type.length; index++) {
      type[
        index
      ].parentElement.parentElement.parentElement.parentElement.style.display =
        "block";
    }
  }
}
