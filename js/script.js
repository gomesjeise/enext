function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var state = JSON.parse(Get('./json/potions.json'));
var bag = 0;
function searchPotions(){
    clearCatalog();
    document.getElementById("bag").innerHTML = bag;
    document.getElementById("category").innerHTML = "Potions";
    var i= 1;
    for(i = 1; i <= 6; i++){
        var p = '<div class="product" id="'+state.potions[i].id+'" onclick="openLigthbox(this.id)"><img src="img/products/'+state.potions[i].image+'"><p class="name">'+state.potions[i].name+' - &nbsp<i class="red" style="font-weight: normal;">$'+state.potions[i].price+'</i></p></div>'
        
        document.getElementById("catalog").innerHTML += p;
    }
}


function clearCatalog(){
   document.getElementById("catalog").innerHTML = ""
}

function openLigthbox(item){
    alert(state.potions[item].name + ' / ' + state.potions[item].price);
}

function addBag(){
    
    document.getElementById("bag").innerHTML = bag++;
}