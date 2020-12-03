const fris = 1;
const bier = 2;
const wijn = 3;
const bitterbal8 = 5;
const bitterbal16 = 8;

var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;
var schaal8 = 0;
var schaal16 = 0;
var bestelling;
var aantal1234;
var totaalPrijsFris=0;
var totaalPrijsBier=0;
var totaalPrijsBier=0;
var totaalPrijsWijn=0;
var totaalPrijsSchaal8=0;
var totaalPrijsSchaal16=0;

function bestellen(){

	while(bestelling != "stop"){

		bestelling = prompt("wilt uw fris, bier, wijn of een snack bestellen? [typ stop als u wilt stoppen met bestellen]");

		if(bestelling == "fris"){
			aantal1234 = parseInt(prompt("hoeveel fris wilt uw?"));
			aantalfris = aantalfris + aantal1234;
		}

		if(bestelling == "bier"){
			aantal1234 = parseInt(prompt("hoeveel bier wilt uw?"));

			aantalbier = aantalbier + aantal1234;
		}

		if(bestelling == "wijn"){
			aantal1234 = parseInt(prompt("hoeveel wijn wilt uw?"));

			aantalwijn = aantalwijn + aantal1234;
		}	
		
		if(bestelling == "snack"){
			aantal1234 = parseInt(prompt("wilt uw een schaal van 8 of 16 bitterballen?"));

			if(aantal1234 == "8"){
				schaal8 = schaal8 +1;
			}

			if(aantal1234 == "16"){
				schaal16 = schaal16 +1;
			}
			
		}	
	}
}

bestellen();

//kosten (alleen van de aparte etenswaren en drinken)
function kosten(){
	totaalPrijsFris=fris * aantalfris;
	totaalPrijsSchaal16=bitterbal16 * schaal16;
	totaalPrijsSchaal8=bitterbal8 * schaal8;
	totaalPrijsWijn=wijn * aantalwijn;
	totaalPrijsBier=bier * aantalbier;


	if(aantalfris > 0)
		document.write("aantalfris besteld = " + aantalfris + "<br>" + "kosten = € " + totaalPrijsFris +  "<br>");

	if(aantalbier > 0)
		document.write("aantalbier besteld = " + aantalbier + "<br>" + "kosten = € " + totaalPrijsBier + "<br>");
	
	if(aantalwijn > 0)
		document.write("aantalwijn besteld = " + aantalwijn + "<br>" + "kosten = € " + totaalPrijsWijn + "<br>");

	if(schaal8 > 0)
		document.write("aantal 8 bitterballen besteld = " + schaal8 + "<br>" + "kosten = € " + totaalPrijsSchaal8 + "<br>");

	if(schaal16 > 0)
		document.write("aantal 16 bitterballen besteld = " + schaal16 + "<br>" + "kosten = € " + totaalPrijsSchaal16 + "<br>");
}

kosten();

//totaal kosten (alles bij elkaar)
function totaalkosten(){

	var totaalPrijs=totaalPrijsFris+totaalPrijsBier+totaalPrijsWijn+totaalPrijsSchaal8+totaalPrijsSchaal16;
	document.write("totaalkosten = € " + totaalPrijs + "<br>")


}

totaalkosten();
