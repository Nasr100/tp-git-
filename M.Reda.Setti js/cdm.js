

function accept(){
    var x = document.getElementById("nom").innerHTML ;

    document.getElementById("accept").innerHTML = 'la commande de Mr.' + x + ' ' + 'est accepté' ;
}

function refuse(){
    var x = document.getElementById("nom").innerHTML ;
    let cause = prompt("la cause du refus");
    document.getElementById("accept").innerHTML = 'la commande de Mr.' + x + ' ' + 'est refusé à cause de :' + ' ' + '"' + cause + '"';
}

var x1 = document.getElementById("nom1").innerHTML ;
function accept1(){

    document.getElementById("result1").innerHTML = 'la commande de Mr.' + x1 + ' ' + 'est accepté' ;
}

function refuse1(){
    let cause1 = prompt("la cause du refus");
    document.getElementById("result1").innerHTML = 'la commande de Mr.' + x1 + ' ' + 'est refusé à cause de :' + ' ' + '"' + cause1 + '"';
}


var x2 = document.getElementById("nom2").innerHTML ;
function accept2(){

    document.getElementById("result2").innerHTML = 'la commande de Mr.' + x2 + ' ' + 'est accepté' ;
}

function refuse2(){
    let cause2 = prompt("la cause du refus");
    document.getElementById("result2").innerHTML = 'la commande de Mr.' + x2 + ' ' + 'est refusé à cause de :' + ' ' + '"' + cause2 + '"';
}


var x3 = document.getElementById("nom3").innerHTML ;
function accept3(){

    document.getElementById("result3").innerHTML = 'la commande de Mr.' + x3 + ' ' + 'est accepté' ;
}

function refuse3(){
    let cause3 = prompt("la cause du refus");
    document.getElementById("result3").innerHTML = 'la commande de Mr.' + x3 + ' ' + 'est refusé à cause de :' + ' ' + '"' + cause3 + '"';
}


var x4 = document.getElementById("nom4").innerHTML ;
function accept4(){

    document.getElementById("result4").innerHTML = 'la commande de Mr.' + x4 + ' ' + 'est accepté' ;
}

function refuse4(){
    let cause4 = prompt("la cause du refus");
    document.getElementById("result4").innerHTML = 'la commande de Mr.' + x4 + ' ' + 'est refusé à cause de :' + ' ' + '"' + cause4 + '"';
}

var x5 = document.getElementById("nom5").innerHTML ;
function accept5(){

    document.getElementById("result5").innerHTML = 'la commande de Mr.' + x5 + ' ' + 'est accepté' ;
}

function refuse5(){
    let cause5 = prompt("la cause du refus");
    document.getElementById("result5").innerHTML = 'la commande de Mr.' + x5 + ' ' + 'est refusé à cause de :' + ' ' + '"' + cause5 + '"';
}