var myArray;
myArray = [];
myArray[0] = "John";
myArray[1] = "Paul";
myArray[2] = "George";
myArray[3] = "Ringo";


var bestBeatle =  function () {
	var juicyBeatle = myArray[Math.floor(Math.random() * 4)];
		return juicyBeatle;
};

if(bestBeatle =="John") { 
	document.write("Correct, " + bestBeatle() + " was the best Beatle!");
} else {
	document.write("</br>" + bestBeatle() + " not the best beatle, sorry");
}

var conversionType = prompt("Type C for centigrade conversion or F for fahrenheit conversion.");

if (conversionType == "C") {
	var degCent = prompt("Enter a number:",0);
	var gasMark = (degCent - 121) / 14;
	document.getElementById("feedback").innerHTML=parseInt(gasMark,10);
} else if (conversionType =="F") {
	var degFahren = prompt("Enter a number", 0);
	degCent = 5/9 * (degFahren - 32);
	var gasMark = (degCent -121) / 14;
	document.getElementById("feedback").innerHTML=parseInt(gasMark,10);
} else {
	document.getElementById("feedback").innerHTML="not cooking with gas today";

}

