let cardsArray = ["ciri.png","geralt.png","jaskier.png","jaskier.png","iorweth.png","triss.png","geralt.png","yen.png","ciri.png","triss.png","yen.png","iorweth.png"];
var los;
var cards = new Array();
var tablica = new Array();
let i=0;
var warunek;
var dlugosc =0;
function losowanie(){
while (i<12)
{
	los=Math.floor((Math.random()*12));
	
	warunek=true;
	for(z=0;z<tablica.length;z++)
		{
			if(los==tablica[z]){ 
				warunek =false; 
				break;
				}
		}
		if(warunek==false){
			continue;
			}
			tablica[i]=los;
			cards[i]=cardsArray[los];
			i++;
}
}
losowanie();
for(a=0;a<12;a++)
{
	let index=a;
	$('#c'+a).on('click',function(){reviewCard(index);});

}
let oneVisible = false;
let turnCounter = 0;
let visible_number;
let lock=false;
var pairsLeft=6;
var numerTestowy;


function reviewCard(nr)
{
	
	let optValue=$('#c'+nr).css('opacity');
	if(optValue!=0 && lock==false &&nr!=numerTestowy)
	{
		numerTestowy=nr;
		lock=true;
	var obraz="url(img/"+cards[nr]+")";
	$('#c'+nr).css('background-image',obraz);
	$('#c'+nr).addClass('cardA');
	
	if(oneVisible==false)
	{
		//first card
		
		oneVisible=true;
		visible_number=nr;
		 lock=false;
		 
	}
	else{
		//second card
		if(cards[visible_number]==cards[nr])
		{
			setTimeout(function(){hide2cards(nr,visible_number)},750);
			numerTestowy= -1;
		}
	else{
		setTimeout(function(){restore2cards(nr,visible_number)},750);
		numerTestowy= -1;
	}
		turnCounter++;
		
		$('.score').html('Turn counter:'+turnCounter);
		oneVisible=false;
	}
}
}
function hide2cards (nr1,nr2)
{
	$('#c'+nr1).css('opacity','0');
	$('#c'+nr2).css('opacity','0');
	pairsLeft--;
	 lock=false;
	 if(pairsLeft==0)
	 {
		 $('.board').html('<h1>You Win </br>Done in '+turnCounter+' turns</h1>');
		 
		 setTimeout(window.location.reload.bind(window.location),5000);
	 }
}
function restore2cards (nr1,nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/karta.png)');
	$('#c'+nr1).removeClass('cardA');
	$('#c'+nr2).css('background-image', 'url(img/karta.png)');
	$('#c'+nr2).removeClass('cardA');
	 lock=false;
	 console.log(nr1,nr2);
}