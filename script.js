
let nclicks = 0;
const imagen = document.querySelector(".imagen");
const intruso = document.querySelector("#intruso");
const clicks = document .querySelector(".clicks") ;
const alerta = document.querySelector(".alerta");
const alertaMensaje = document.querySelector(".alerta-mensaje")

intruso.style.bakgroundcolor = "rgba(0,0,0,0)";


intruso.addEventListener("click" ,function() {
   imagen.style.border ="10px solid green";
   imagen.style.borderRadius ="5%";
   imagen.style.bakgroundColor ="green";
   alerta.style.display = "flex";

   if (nclicks == 1) {
    
    alertaMensaje.textContent="Eres un crak,encontrasteal impostor a la primera";
   } else if  (nclicks < 11) {
    alertaMensaje.textContent=`Buen trabajo ,encontraste al impostor despues de ${nclicks}` ;  
   }else{
    alertaMensaje.textContent="Eres un ciego,igual lo lograste"
   }
   
})

imagen.addEventListener("click",function() {
    nclicks = nclicks + 1;
    
   if (nclicks == 1) {
    clicks.style.color ="green";
   } else if  (nclicks < 11) {
    clicks.style.color ="yellow";  
   }else{
    clicks.style.color ="red";
   }
    clicks.textContent = `clicks: ${nclicks}`;
} )

function recargar  () {
    location.reload()
}
