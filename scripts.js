var designSlider = document.getElementById("designSlider");
var designOutput = document.getElementById("designShow");
designOutput.innerHTML = designSlider.value;

designSlider.oninput = function() {
  designOutput.innerHTML = this.value;
}

var fiftySlider = document.getElementById("fiftySlider");
var fiftyOutput = document.getElementById("fiftyShow");
fiftyOutput.innerHTML = fiftySlider.value;

fiftySlider.oninput = function() {
  fiftyOutput.innerHTML = this.value;
}

var tiredSlider = document.getElementById("tiredSlider");
var tiredOutput = document.getElementById("tiredShow");
tiredOutput.innerHTML = tiredSlider.value;

tiredSlider.oninput = function() {
  tiredOutput.innerHTML = this.value;
}

var proseSlider = document.getElementById("proseSlider");
var proseOutput = document.getElementById("proseShow");
proseOutput.innerHTML = proseSlider.value;

proseSlider.oninput = function() {
  proseOutput.innerHTML = this.value;
}

var conclusionSlider = document.getElementById("conclusionSlider");
var conclusionOutput = document.getElementById("conclusionShow");
conclusionOutput.innerHTML = conclusionSlider.value;

conclusionSlider.oninput = function() {
  conclusionOutput.innerHTML = this.value;
}

var lengthSlider = document.getElementById("lengthSlider");
var lengthOutput = document.getElementById("lengthShow");
lengthOutput.innerHTML = lengthSlider.value;

lengthSlider.oninput = function() {
  lengthOutput.innerHTML = this.value;
}

var rereadSlider = document.getElementById("rereadSlider");
var rereadOutput = document.getElementById("rereadShow");
rereadOutput.innerHTML = rereadSlider.value;

rereadSlider.oninput = function() {
  rereadOutput.innerHTML = this.value;
}

var recommendSlider = document.getElementById("recommendSlider");
var recommendOutput = document.getElementById("recommendShow");
recommendOutput.innerHTML = recommendSlider.value;

recommendSlider.oninput = function() {
  recommendOutput.innerHTML = this.value;
}

var thoughtSlider = document.getElementById("thoughtSlider");
var thoughtOutput = document.getElementById("thoughtShow");
thoughtOutput.innerHTML = thoughtSlider.value;

thoughtSlider.oninput = function() {
  thoughtOutput.innerHTML = this.value;
}

var bestPossible = 4;

var goodreadsPercent = 4;
var designPercent = 7;
var fiftyPercent = 8;
var tiredPercent = 10;
var prosePercent = 7.5;
var conclusionPercent = 9.5;
var lengthPercent = 6;
var rereadPercent = 11;
var recommendPercent = 16;
var thoughtPercent = 21;

function calculateScore () {
	var goodreadsScore = document.getElementById("goodreadsText").value;
	var designScore = document.getElementById("designSlider").value;
	var fiftyScore = document.getElementById("fiftySlider").value;
	var tiredScore = document.getElementById("tiredSlider").value;
	var proseScore = document.getElementById("proseSlider").value;
	var conclusionScore = document.getElementById("conclusionSlider").value;
	var lengthScore = document.getElementById("lengthSlider").value;
	var rereadScore = document.getElementById("rereadSlider").value;
	var recommendScore = document.getElementById("recommendSlider").value;
	var thoughtScore = document.getElementById("thoughtSlider").value;

	if (goodreadsScore === "" || goodreadsScore < 1 || goodreadsScore > 5) {
    alert("Please enter a valid Goodreads rating.");
    return;
	}

	var total = ((goodreadsPercent/bestPossible)*(goodreadsScore - 1)) + ((designPercent/bestPossible)*designScore) + ((fiftyPercent/bestPossible)*fiftyScore) + ((tiredPercent/bestPossible)*tiredScore) + ((prosePercent/bestPossible)*proseScore) + ((conclusionPercent/bestPossible)*conclusionScore) + ((lengthPercent/bestPossible)*lengthScore) + ((rereadPercent/bestPossible)*rereadScore) + ((recommendPercent/bestPossible)*recommendScore) + ((thoughtPercent/bestPossible)*thoughtScore);

  total = total.toFixed(2);

  document.getElementById("totalContainer").style.display = "block";
  document.getElementById("total").innerHTML = total;

	var title = document.getElementById("title");
	var titleShow = document.getElementById("titleShow");
	titleShow.innerHTML = title.value;

	window.scrollTo(0,document.body.scrollHeight);
}

document.getElementById("totalContainer").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateScore();

};
