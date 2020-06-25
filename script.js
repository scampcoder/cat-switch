const cat = document.getElementById('cat');
const paw = document.getElementById('paw');
const h = document.getElementById('h');

function switchCat() {
  if(cat.src.match("white")){
    cat.src = "img/blackcat.jpg";
    paw.src = "img/blackpaw.jpg";
    document.body.style.backgroundColor = "white";
    h.style.color = "black";
    cat.className = "blackcat";
  } else {
    cat.src = "img/whitecat.jpg";
    paw.src = "img/whitepaw.jpg";
    document.body.style.backgroundColor = "black";
    h.style.color = "white";
    cat.className = "whitecat";
  }
}
