document.addEventListener("keyup", e=> {
    let a = 9;
    if (e.target.matches("#buscador")){
        document.querySelectorAll(".card1").forEach(cartas=>{
            cartas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?cartas.classList.remove("filtro")
            :cartas.classList.add("filtro")
        } )
    }
    

}  )


