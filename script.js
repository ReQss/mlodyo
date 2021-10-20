var lista = [
    'https://www.youtube.com/embed/TR1Jymo2O4w'
  
  ];
function podmiana(odcinek){
    document.getElementById("animo").src= lista[odcinek];
    
    }

       //DOM1
    function przypinka(){
        lista_strona = document.getElementById("lista").style.display;
        if (lista_strona == 'none'){
            document.getElementById("lista").style.display = 'block'
            }
        else{
            document.getElementById("lista").style.display = 'none';
            }
        stream = document.getElementById("streamokno").style.display;
       
    }
    function screenmax(){
        var sliderdisplay = document.getElementById('myRange');
        var sliderchat = document.getElementById('sliderchat');

        if(sliderdisplay.style.display =='block'){
         sliderdisplay.style.display = 'none';
         sliderchat.style.display = 'none';
        }
         else {
         sliderdisplay.style.display = 'block';
         sliderchat.style.display = 'block';
         }
          }
          //DOM2
function ep(){
    document.getElementById("animo").src= lista[0];
}

function info(film) {
    var  change = document.getElementById("info").innerHTML = "Film"+film;
}

function infoclear() {
    var  change = document.getElementById("info").innerHTML = "";
}

function author() {
    var  change = document.getElementById("info").innerHTML = "®";
}

function size() {
    var  change = document.getElementById("info").innerHTML = "Rozmiar";
}


function options() {
    var  change = document.getElementById("info").innerHTML = "Widok";
}

function flushed(){
    var  change = document.getElementById("info").innerHTML = " &#128563";
    console.log('x')
}

function slider()
{
    var slider = document.getElementById('myRange').value;
    var stream= document.getElementById('streamokno').style.width = slider+'px';
    var stream= document.getElementById('streamokno').style.height = slider/3.2+'%';
}/*
function sliderchat()
{
    var slider = document.getElementById('sliderchat').value;
    var chat= document.getElementById('chat').style.width = slider+'px';
    var anime=document.getElementById('film').style.width = `calc(100% - ${slider}px) `;
    var stream=document.getElementById('stream').style.width = `calc(100% - ${slider}px) `;

   
}
*/





















