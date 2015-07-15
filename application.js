var rounds =50;
var previousNum = 0;
var nextNum = 1;
var currentNum;
var printOut = document.getElementById("printOut");

for(i =1; i <=50; i++){
	currentNum = previousNum + nextNum;
	printOut.innerHTML += "<div>" + currentNum + "</div>";
	previousNum = nextNum;
	nextNum = currentNum;
	
}
		