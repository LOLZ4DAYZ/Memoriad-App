var intervalId;
var number;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(random, 1000);
}

function random() {
  number = Math.floor(Math.random() * 10);
  $("#number").html("<h1>" + number + "</h1>");
}

function stop() {
  clearInterval(intervalId);
}

$("#stop").on("click", stop);
$("#start").on("click", run);
