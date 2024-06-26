const url = "https://api.nasa.gov/planetary/apod?api_key=BcPB5YINaXxvrV6hIXfYc0LMukwwVd9kt8biWaKj&count=15"


async function listaImagenes () {
    // en try intentamos hacer la solicitud y si viene rechazada sera tratada con catch
    try{
        let fetchImagen = await fetch(url)
        let datosimagenes = await fetchImagen.json()

        console.log(datosimagenes)

        const card = document.querySelector("[data-ul]")

        datosimagenes.forEach(elemento => {
            const contenido = 
            `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            card.innerHTML = card.innerHTML + contenido
        })
    }
    catch(error){
        console.log(error)
    }
}

listaImagenes()



// Then y catch
/*function listaImagenes() {
    fetch(url)
    .then(response => response.json())
    .then(datosimagenes => {
        console.log(datosimagenes)

        const card = document.querySelector("[data-ul]")

        datosimagenes.forEach(elemento => {
            const contenido = `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            card.innerHTML = card.innerHTML + contenido
        })
    })
    .catch(error => console.log(error))
}

listaImagenes()*/

