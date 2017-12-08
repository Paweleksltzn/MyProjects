//OBIEKT GRY I LISTENERY -------------------------------------------------

let cookiesBakery = {
    myKey:1,
    cookieAmount:0,
    cookieProduction:0,
    oneCursorProduction:1,
    cursorAmount:0,
    cursorProduction:0,
    cursorPrize:10,
    grandmumAmount:0,
    grandmumProduction:0,
    oneGrandmumProduction:5,
    grandmumPrize:100,
    farmAmount:0,
    farmProduction:0,
    oneFarmProduction:20,
    farmPrize:1200,
    bankAmount:0,
    bankProduction:0,
    oneBankProduction:100,
    bankPrize:24000,
    bakeryAmount:0,
    bakeryProduction:0,
    oneBakeryProduction:500,
    bakeryPrize:100000,
    mineAmount:0,
    mineProduction:0,
    oneMineProduction:1000,
    minePrize:300000,

};
document.querySelector(".productor2").addEventListener('click',cursorFunction);
document.querySelector('.productor1').addEventListener('click',grandmumFunction);
document.querySelector('.productor3').addEventListener('click',farmFunction);
document.querySelector('.productor4').addEventListener('click',bankFunction);
document.querySelector('.productor5').addEventListener('click',bakeryFunction);
document.querySelector('.productor6').addEventListener('click',mineFunction);
document.querySelector('#backing img').addEventListener('click',cookieClickFunction);
// FUNKCJE -----------------------------------------------------------------------
function cookieClickFunction(){
    cookiesBakery.cookieAmount++;
    document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
}

function cursorFunction(){
    //console.log("odpalam");
        if(cookiesBakery.cookieAmount>=cookiesBakery.cursorPrize){
        //console.log("slysze");
        cookiesBakery.cursorAmount++;
        cookiesBakery.cookieAmount-=cookiesBakery.cursorPrize;
        cookiesBakery.cursorPrize=cookiesBakery.cursorPrize+cookiesBakery.cursorPrize*0.15;
        cookiesBakery.cursorProduction=cookiesBakery.cursorAmount*cookiesBakery.oneCursorProduction;
        cookiesBakery.cookieProduction+=cookiesBakery.oneCursorProduction;
        document.getElementById('cursorPrize').textContent=Math.round(cookiesBakery.cursorPrize);
        document.getElementById('cookieProduction').textContent=cookiesBakery.cookieProduction;
        document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
        document.getElementById('cursorAmount').textContent=cookiesBakery.cursorAmount;
        document.getElementById('cursorProduction').textContent=cookiesBakery.cursorProduction;

    }
    }

function grandmumFunction(){
       // console.log("odpalam");
        if(cookiesBakery.cookieAmount>=cookiesBakery.grandmumPrize){
          //  console.log("slysze");
            cookiesBakery.grandmumAmount++;
            cookiesBakery.cookieAmount-=cookiesBakery.grandmumPrize;
            cookiesBakery.grandmumPrize=cookiesBakery.grandmumPrize+cookiesBakery.grandmumPrize*0.15;
            cookiesBakery.grandmumProduction=cookiesBakery.grandmumAmount*cookiesBakery.oneGrandmumProduction;
            cookiesBakery.cookieProduction+=cookiesBakery.oneGrandmumProduction;
            document.getElementById('grandmumPrize').textContent=Math.round(cookiesBakery.grandmumPrize);
            document.getElementById('cookieProduction').textContent=cookiesBakery.cookieProduction;
            document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
            document.getElementById('grandmumAmount').textContent=cookiesBakery.grandmumAmount;
            document.getElementById('grandmumProduction').textContent=cookiesBakery.grandmumProduction;
        }
}

function farmFunction(){
           // console.log("odpalam");
           if(cookiesBakery.cookieAmount>=cookiesBakery.farmPrize){
            //  console.log("slysze");
              cookiesBakery.farmAmount++;
              cookiesBakery.cookieAmount-=cookiesBakery.farmPrize;
              cookiesBakery.farmPrize=cookiesBakery.farmPrize+cookiesBakery.farmPrize*0.15;
              cookiesBakery.farmProduction=cookiesBakery.farmAmount*cookiesBakery.oneFarmProduction;
              cookiesBakery.cookieProduction+=cookiesBakery.oneFarmProduction;
              document.getElementById('farmPrize').textContent = Math.round(cookiesBakery.farmPrize);
              document.getElementById('cookieProduction').textContent=cookiesBakery.cookieProduction;
              document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
              document.getElementById('farmAmount').textContent=cookiesBakery.farmAmount;
              document.getElementById('farmProduction').textContent=cookiesBakery.farmProduction;
          }
}

function bankFunction(){
    if(cookiesBakery.cookieAmount>=cookiesBakery.bankPrize){
        //  console.log("slysze");
          cookiesBakery.bankAmount++;
          cookiesBakery.cookieAmount-=cookiesBakery.bankPrize;
          cookiesBakery.bankPrize=cookiesBakery.bankPrize+cookiesBakery.bankPrize*0.15;
          cookiesBakery.bankProduction=cookiesBakery.bankAmount*cookiesBakery.oneBankProduction;
          cookiesBakery.cookieProduction+=cookiesBakery.oneBankProduction;
          document.getElementById('bankPrize').textContent = Math.round(cookiesBakery.bankPrize);
          document.getElementById('cookieProduction').textContent=cookiesBakery.cookieProduction;
          document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
          document.getElementById('bankAmount').textContent=cookiesBakery.bankAmount;
          document.getElementById('bankProduction').textContent=cookiesBakery.bankProduction;
      }
}

function bakeryFunction(){
    //console.log("odpalam");
    if(cookiesBakery.cookieAmount>=cookiesBakery.bakeryPrize){
         //console.log("slysze");
          cookiesBakery.bakeryAmount++;
          cookiesBakery.cookieAmount-=cookiesBakery.bakeryPrize;
          cookiesBakery.bakeryPrize=cookiesBakery.bakeryPrize+cookiesBakery.bakeryPrize*0.15;
          cookiesBakery.bakeryProduction=cookiesBakery.bakeryAmount*cookiesBakery.oneBakeryProduction;
          cookiesBakery.cookieProduction+=cookiesBakery.oneBankProduction;
          document.getElementById('bakeryPrize').textContent = Math.round(cookiesBakery.bakeryPrize);
          document.getElementById('cookieProduction').textContent=cookiesBakery.cookieProduction;
          document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
          document.getElementById('bakeryAmount').textContent=cookiesBakery.bakeryAmount;
          document.getElementById('bakeryProduction').textContent=cookiesBakery.bakeryProduction;
      }
}

function mineFunction (){
    if(cookiesBakery.cookieAmount>=cookiesBakery.minePrize){
        console.log("slysze");
         cookiesBakery.mineAmount++;
         cookiesBakery.cookieAmount-=cookiesBakery.minePrize;
         cookiesBakery.minePrize=cookiesBakery.minePrize+cookiesBakery.minePrize*0.15;
         cookiesBakery.mineProduction=cookiesBakery.mineAmount*cookiesBakery.oneMineProduction;
         cookiesBakery.cookieProduction+=cookiesBakery.oneMineProduction;
         document.getElementById('minePrize').textContent = Math.round(cookiesBakery.minePrize);
         document.getElementById('cookieProduction').textContent=cookiesBakery.cookieProduction;
         document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
         document.getElementById('mineAmount').textContent=cookiesBakery.mineAmount;
         document.getElementById('mineProduction').textContent=cookiesBakery.mineProduction;
     }
}

  setInterval(function(){
    cookiesBakery.cookieAmount+=cookiesBakery.cookieProduction;
    document.getElementById('cookieAmount').textContent=cookiesBakery.cookieAmount;
    document.querySelector('.neededCookies1').textContent=Math.round(cookiesBakery.cookieAmount-cookiesBakery.grandmumPrize);
    document.querySelector('.neededCookies2').textContent=Math.round(cookiesBakery.cookieAmount-cookiesBakery.cursorPrize);
    document.querySelector('.neededCookies3').textContent=Math.round(cookiesBakery.cookieAmount-cookiesBakery.farmPrize);
    document.querySelector('.neededCookies4').textContent=Math.round(cookiesBakery.cookieAmount-cookiesBakery.bankPrize);
    document.querySelector('.neededCookies5').textContent=Math.round(cookiesBakery.cookieAmount-cookiesBakery.bakeryPrize);
    document.querySelector('.neededCookies6').textContent=Math.round(cookiesBakery.cookieAmount-cookiesBakery.minePrize);
},1000);

/*var request = window.indexedDB.open("cookieDataBase",1);
var db;
request.onupgradeneeded = function(event){
    console.log("upgradeneed");
     db = event.target.result;
   if(!db.objectStoreNames.contains("cookiesData"))
        var os=db.createObjectStore("cookies",{keypath:"id",autoIncrement:true});
    
}
request.onsuccess = function(event){
    console.log("success - baza otwarta ");
    db = event.target.result;
}
request.onerror = function(){
    console.log("error");
}


function refreshDb(){
    
    var transaction = db.transaction(["cookiesData"],"readwrite");
    var store = transaction.objectStore("cookiesData");
    var cookieSave={
        cookieAmount:cookiesBakery.cookieAmount,
        cookieProduction:cookiesBakery.cookieProduction,
        
    }
    var request = store.add(cookieSave);
    request.onsuccess=function(e){
        console.log("udane");
    }
    request.onerror=function(){
        console.log("nie udane");
    }
}
*/
//declarating variable to unbug coment
var a;