let sliderInner = document.querySelector(".slider--inner");
let imagenes = sliderInner.querySelectorAll("img");

let cont = 1;
setInterval(function(){
  let porcentaje = cont * -100;
  sliderInner.style.transform = `translateX(${porcentaje}%)`;
  cont++;
  if(cont> imagenes.length-1){
    cont = 0;
  }
},1000)