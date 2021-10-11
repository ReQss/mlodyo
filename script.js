var lista = [
    
  
  ];

function podmiana(odcinek){
    document.getElementById("animo").src= lista[odcinek];
    
    }
    function przypinka(){
        lista_strona = document.getElementById("lista").style.display;
        
        if (lista_strona == 'none'){
            document.getElementById("lista").style.display = 'block'
            }
        else{
            document.getElementById("lista").style.display = 'none';
            }
        stream = document.getElementById("streamokno").style.display;
        /*if (stream == 'none'){
            document.getElementById("streamokno").style.display = 'block'
            }
        else{
            document.getElementById("streamokno").style.display = 'none';
            }*/
    }
    function screenmax(){
        console.log('x');
        var sliderdisplay = document.getElementById('myRange');
        
         sliderdisplay.style.display = 'block';
          
          
          }
function ep(){
    document.getElementById("animo").src= lista[0];
}

function change1() {
    var  change = document.getElementById("info").innerHTML = "Film1";
}

function change11() {
    var  change = document.getElementById("info").innerHTML = "";
}

function change2() {
    var  change = document.getElementById("info").innerHTML = "Film2";
}

function change22() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change3() {
    var  change = document.getElementById("info").innerHTML = "Film3";
}

function change33() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change4() {
    var  change = document.getElementById("info").innerHTML = "Film4";
}

function change44() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change5() {
    var  change = document.getElementById("info").innerHTML = "Film5";
}

function change55() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change6() {
    var  change = document.getElementById("info").innerHTML = "Film6";
}
function change66() {
    var  change = document.getElementById("info").innerHTML = "";
}

function author() {
    var  change = document.getElementById("info").innerHTML = "®";
}
function author2() {
    var  change = document.getElementById("info").innerHTML = "";
}
function size() {
    var  change = document.getElementById("info").innerHTML = "Rozmiar";
}
function size2() {
    var  change = document.getElementById("info").innerHTML = "";
}


function options() {
    var  change = document.getElementById("info").innerHTML = "Widok";
}
function options2() {
    var  change = document.getElementById("info").innerHTML = "";
}
function flushed(){
    var  change = document.getElementById("info").innerHTML = " &#128563";
    console.log('x')
}
function flushed2(){
    var  change = document.getElementById("info").innerHTML = "";
  
}
function slider()
{
    var slider = document.getElementById('myRange').value;
    var stream= document.getElementById('streamokno').style.width = slider+'px';
    var stream= document.getElementById('streamokno').style.height = slider/3.2+'%';
}




















