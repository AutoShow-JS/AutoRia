var apiKey = "OeyqbA5bhCQHbHfjVsYjRsudRopUIJymPkoJ8RRe";
var idArray = [];

window.onload = () => {
  RequestCarsId();
};

//получаем id машин
async function RequestCarsId() {
  let searchUrl = `https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&marka_id=28&with_photo=1`;

  await fetch(searchUrl, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      idArray = result.result.search_result.ids;
      console.log(idArray);
    });
}
