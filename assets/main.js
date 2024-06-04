const contenido= document.getElementById("contenido")
const fetchData = async () =>{
    try{


        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        const data = await respuesta.json()
        const pregunta = data.results

        pregunta.forEach(pregunt => {
            const item = document.createElement("div")
            item.className = "objeto"
            item.innerHTML+=`
            <h1>${pregunt.name}</h1>
            <img src="${pregunt.image}">
            `;
            contenido.appendChild(item)
        });

    } catch(error){
        console.error("Error al cargar la pagina")
    }

}

fetchData()