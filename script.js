var apiKey = "OeyqbA5bhCQHbHfjVsYjRsudRopUIJymPkoJ8RRe";
var idArray = [];

window.onload = async () => {
  await RequestCarsId();
  await RequestCarsById();
};

//получаем id машин
async function RequestCarsId() {
  let searchUrl = `https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&marka_id=28&with_photo=1`;

  await fetch(searchUrl, {
    method: "GET",
  })
    .then(async function (response) {
      return response.json();
    })
    .then(function (result) {
      idArray = result.result.search_result.ids;
      console.log(result);
    });
}

//получаем инфу о машинах по id
async function RequestCarsById() {
    
  //idArray.forEach(async (element) => {
  let infoUrl = `https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${idArray[0]}`;

  await fetch(infoUrl, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
    });
  //});
}
