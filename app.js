$(document).ready(function () {
  console.log("ready");
  const head = $(".adviceHeading");
  const advice = $("#advice");
  const dice = $(".dice");
  const url = "https://api.adviceslip.com/advice";
  const element = $(".dice-img");

  var tmpAnimation = 0;

  dice.on("click", function () {
    tmpAnimation = tmpAnimation + 360;

    $({degrees: tmpAnimation - 360}).animate({degrees: tmpAnimation}, {
        duration: 1000,
        step: function(now) {
            element.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

    fetch(url, {cache: 'no-cache'}) // fetching data from the api // *default, no-cache, reload, force-cache, only-if-cached
  .then((response) => response.json())
  .then((response) => {
    let data = response.slip;
    head.html("Advice #" + data.id);
    advice.html(data.advice);
  });
  });
});
