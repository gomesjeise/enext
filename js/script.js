function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var state = JSON.parse(Get('./json/potions.json'));

function searchPotions(){
    clearCatalog();
    
    document.getElementById("category").innerHTML = "Potions";
    var i= 1;
    for(i = 1; i <= 6; i++){
        var p = '<div class="product" id="'+state.potions[i].id+'" onclick="openLigthbox(this.id)"><img src="img/products/'+state.potions[i].image+'"><p class="name">'+state.potions[i].name+' - </p><i class="red">$'+state.potions[i].price+'</i></div>'
        
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
    document.getElementById("bag").textContent += 1;
}