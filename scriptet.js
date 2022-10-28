function rollDice() {
    let x = Math.floor((Math.random() * 6) + 1);
    
document.getElementById("cell11").innerHTML = "";
document.getElementById("cell12").innerHTML = "";
document.getElementById("cell13").innerHTML = "";
document.getElementById("cell21").innerHTML = "";
document.getElementById("cell22").innerHTML = "";
document.getElementById("cell23").innerHTML = "";
document.getElementById("cell31").innerHTML = "";
document.getElementById("cell32").innerHTML = "";
document.getElementById("cell33").innerHTML = "";


    if (x==2 || x==3 || x==4 || x==5 || x==6){
    document.getElementById("cell11").innerHTML = "<img src=dice.png>";
    }
    
    if (x==4 || x==5 || x==6){
    document.getElementById("cell13").innerHTML = "<img src=dice.png>";
    }
    
    if (x==6){
    document.getElementById("cell21").innerHTML = "<img src=dice.png>";
    }
    
    if (x==1 || x==3 || x==5){
    document.getElementById("cell22").innerHTML = "<img src=dice.png>";
    }
    
    if (x==6){
    document.getElementById("cell23").innerHTML = "<img src=dice.png>";
    }
    
    if (x==4 || x==5 || x==6){
    document.getElementById("cell31").innerHTML = "<img src=dice.png>";
    }
    
    if (x==2 || x==3 || x==4 || x==5 || x==6){
    document.getElementById("cell33").innerHTML = "<img src=dice.png>";
    }

}