$(document).ready(function () {
  console.log("ready");
  const head = $(".adviceHeading");
  const advice = $("#advice");
  const dice = $(".dice");
  const url = "https://api.adviceslip.com/advice";


  dice.on("click", function () {

    fetch(url, {cache: 'no-cache'}) // fetching data from the api // *default, no-cache, reload, force-cache, only-if-cached
  .then((response) => response.json())
  .then((response) => {
    let data = response.slip;
    console.log(data);
    head.html("Advice #" + data.id);
    advice.html(data.advice);
  });
  });
});
