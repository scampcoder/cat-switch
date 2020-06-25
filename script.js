const cat = document.getElementById('cat');
const paw = document.getElementById('paw');
const h1 = document.getElementById('h1');

function switch() {
  if(cat.src.match("white")){
    cat.src = "img/blackcat.jpg"
    paw.src = "img/blackpaw.jpg"
    document.style.backgroundColor = "white";
    h1.style.color = "black";
    cat.class = "blackcat";
  } else {
    cat.src = "img/whitecat.jpg"
    paw.src = "img/whitepaw.jpg"
    document.style.backgroundColor = "black";
    h1.style.color = "white";
    cat.class = "whitecat";
  }
}
