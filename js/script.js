let sí=document.getElementById('sí');
sí.addEventListener("click",function(e){
alert("Sabía que aceptarías, cariño");
});

let no=document.getElementById('no');
no.addEventListener("mousemove",function(e){
  let x =Math.round(Math.random() * 93  );
  let y =Math.round(Math.random() * 93  );
  no.style.left = x+"%";
  no.style.top = y+"%";
});