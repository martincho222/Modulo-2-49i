

document.getElementById("btnEmpezar").addEventListener("click",()=>{
    document.getElementById("juego").classList.remove("d-none")
    document.getElementById("btnEmpezar").classList.add("d-none")

    const numeroAleatorio = Math.floor(Math.random() * 1001);

    document.getElementById("formulario").addEventListener("submit",(evento)=>{
        evento.preventDefault();
    })
    
    document.getElementById("botonAdivinar").addEventListener("click",function(){ 
        let numeroElejido = parseFloat(document.getElementById("numeroElejido").value);

        if (numeroAleatorio===numeroElejido){
            adivino.classList.remove("d-none")
            noAdivino.classList.add("d-none")
            btnVolver.classList.remove("d-none")
            botonAdivinar.classList.add("d-none");
        }
        else
        {
            if(numeroElejido<numeroAleatorio){
                adivino.classList.add("d-none");
                noAdivino.classList.remove("d-none")
                
                let mensaje = document.getElementById("noAdivino");
                mensaje.innerHTML = "No adivinaste, el número mágico es mas grande. Intenta nuevamente"
            }
            else
            {
                adivino.classList.add("d-none");
                noAdivino.classList.remove("d-none")
                let mensaje = document.getElementById("noAdivino");
                mensaje.innerHTML = "No adivinaste, el número mágico es mas chico, Intenta nuevamente"
            }
        }
    
      });

      document.getElementById("btnVolver").addEventListener("click",()=>{
        location.reload();
      })
})


  