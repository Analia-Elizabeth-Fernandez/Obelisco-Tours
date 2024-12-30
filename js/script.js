
let nuestrosTours = [
    
    {
        "id" : 1111,
        "name" : "City Tour - Barrio La Boca",
        "imagen" : "img/Barrio La Boca.jpg",
        "price" : 47.99,
        "description" : "Explore uno de los barrios con más historia de Buenos Aires en este recorrido privado a pie por La Boca, un enclave bohemio y el lugar de nacimiento del tango. Los puntos destacados incluyen visitar el Mercado Caminito, el Museo Benito Quinquela Martín y el Puente Transbordador Nicolás Avellaneda, un puente histórico en las calles Riachuelo y Vuelta de Rocha. Su recorrido concluye en el Estadio Alberto J. Armando, también conocido como 'La Bombonera' y hogar del querido equipo de fútbol Boca Juniors",
    },

    {
        "id" : 2222, 
        "name" : "City Tour - Buenos Aires" , 
        "imagen" : "img/Buenos Aires city Tour.jpeg",
        "price" : 45.99,
        "description" : "Es el primer paseo que recomendamos realizar en Buenos Aires, en este tour conoceras a  “LA REINA DEL PLATA”. Te buscamos por el hotel y vamos a recorrer los barrios más emblemáticos de la ciudad. Centro, Microcentro, Plaza de Mayo, Recoleta, La Boca y Caminito y muchos otros puntos destacados de la Ciudad."
    },

    {
        "id" : 3333, 
        "name" : "Tour Cementerio de la Recoleta" , 
        "imagen" : "img/Cementerio de la Recoleta.jpg",
        "price" : 69.99,
        "description" : "Conozca uno de los barrios mas aristocráticos de la Ciudad de Buenos Aires, cuna de las  grandes familias que vivieron en la buenos aires de finales del Siglo XIX. Conozca su famoso Cementerio, considerado uno de los 3 mas bonitos del mundo, por su valor histórico, artístico y cultural. Donde descansan los restos de grandes y notables personalidades de la historia argentina (políticos, soldados, artistas héroes nacionales y mas)."
    },

    {
        "id" : 4444, 
        "name" : "Tour Gastronómico San Telmo" , 
        "imagen" : "img/Mercado de San Telmo.jpg",
        "price" : 51.99,
        "description" : "Descubra los sitios, los sonidos y la cultura del barrio de San Telmo y su mercado en un recorrido privado a pie. Conocido por sus antigüedades, souvenirs y comida argentina, puedes explorar este famoso rincón de Buenos Aires a través de los ojos de un experto. Con un guía personal a tu disposición, tienes la oportunidad de hacer preguntas y detenerte en los lugares que más te interesen."
    },

    {
        "id" : 5555, 
        "name" : "Buenos Aires Nocturna - Show de Tango" , 
        "imagen" : "img/Tango.jpg",
        "price" : 99.99,
        "description" : "Nuestra esquina es la más tanguera de Argentina, donde la poesía y el tango nos invitan a soñar. El símbolo de la cultura urbana de la década del cuarenta. Por sus mesas, pasaron los músicos que hicieron del tango la expresión artística más importante de nuestra historia. El encanto y la importancia cultural del lugar, declarado edificio histórico, nos atrae a San Juan y Boedo en el cual disfrutaremos de un espectaculo de tango sumergiendonos en la cultura de Buenos Aires."
    },

    {
        "id" : 6666, 
        "name" : "Nuestra cultura - Fiesta Gaucha" , 
        "imagen" : "img/Fiesta Gaucha.jpeg",
        "price" : 299.99,
        "description" : "La fiesta gaucha se disfruta los dias sabados de 10.30 a 18.30 horas; en este día se puede disfrutar de gastronomía típica, cabalgatas, paseos a caballo, paseos en sulky y piscina al aire libre durante el verano, canchas de tenis, fútbol, voleibol, caminatas a través del exuberante bosque de más de 20 hectáreas. Ubicación: Lobos, a unos 120 km de la ciudad. Destaca su castillo de 1890 diseñado por el arquitecto francés Alberto Favre - Estancia La Candelaria"
    },

    {
        "id" : 7777, 
        "name" : "Paseo en el Tigre" , 
        "imagen" : "img/Delta - Tigre.jpg",
        "price" : 69.99,
        "description" : "Conozca la ciudad de Tigre y uno de los mayores deltas del mundo “LA VENECIA ARGENTINA”. Inolvidable paseo que recorre el famoso Delta del Río Paraná y la zona norte de Bs As. En este tour podra conocer, disfrutar un dia al aire libre en el hermoso Delta del Rio Tigre, recorriendo su mercado, su casco historico y navegando sus aguas rodeadas de vegetaciones. Este tiene tour tiene salidas diarias por la mañana."
    },

    {
        "id" : 8888, 
        "name" : "Cata de vinos Premium en Palermo" , 
        "imagen" : "img/Cata de vinos.png",
        "price" : 95.99,
        "description" : "Degustaciones programadas (individuales o grupales) de los mas exquisitos vinos argentinos. El servicio de sommeliers puede ser bilingüe. Las opciones de degustación son de 6 etiquetas de vinos de alta gama, ambas a cargo del sommeliers de basta experiencia. Previamente se realiza un walking tour en Palermo, en la zona de Plaza Cortazar. La cata estará acompañada de una degustación de empanaditas de lomo (el menú puede estar sujeto a modificaciones por el tipo de evento). En caso de que los asistentes sean vegetarianos, el menú será de una tabla de quesos y frutos secos."
    },

    {
        "id" : 9999, 
        "name" : "Visita Museo de River" , 
        "imagen" : "img/Museo River.jpeg",
        "price" : 119.99,
        "description" : "Visite y conozca la historia de uno de los más importantes equipos argentinos. Admire sus vitrinas, sus conquistas nacionales e internacionales. Admire su moderno y funcional Museo. Recorra su estadio, sus tribunas y acceda a los vestuarios donde se cambian los equipos los días de partido. Se podra bajar al campo de juego, conocer el tunel unico y el vestuario visitante siempre y cuando no haya ningun evento en el estadio (conciertos, partido de futbol, entrenamiento u otra situacion que impida el acceso a estas secciones del estadio)."
    },
];

for( let i = 0; i < nuestrosTours.length; i++) {
    console.log("Name: ", nuestrosTours[i].name)
}


let contenedornuestrosTours = document.getElementById('nuestrosTours');


let contenedorIndividual = document.createElement ('div');



contenedorIndividual.classList.add('card_container')


document.addEventListener("DOMContentLoaded", (event) => {
    nuestrosTours.forEach(nuestrosTours => {
        contenedorIndividual.innerHTML += `
        <div class="card">
        <form id="my_form${nuestrosTours.id}">
            <div>
            <img src = "${nuestrosTours.imagen}"> 
            <output id="nombre" name="nombre">${nuestrosTours.name}</output>
            <br>
            <output id="precio" name="precio">${nuestrosTours.price}</output>
            <br>
            <button id="btnDescripción${nuestrosTours.id}" class="button" onclick="Descripción(${nuestrosTours.id})"> Descripción</button>
            <div id="botonera${nuestrosTours.id}">
                <button onclick="comprar(${nuestrosTours.id})" class="button" value="Comprar">Comprar</button>
            </div>
            <div>
                <output id="description${nuestrosTours.id}" class="description">
                ${nuestrosTours.description}
                <br
                    <button onclick="comprar(${nuestrosTours.id})" class="button" value="Comprar">Comprar</button>
                </output>
            </div>
        </div>
    `;

    contenedornuestrosTours.append(contenedorIndividual);
})});


function Descripción(id) {
    event.preventDefault();
    let idx = id.toString();

    let param = 'description' + idx;
    let btnDescripción = 'botonera' + idx;
    let btnComprar= 'comprar' + idx;


    document.getElementById(param).style.display = "block";
    document.getElementById(btnComprar).style.display = "none";
    document.getElementById(btnDescripción).style.display = "none";
}



function insertDOM() {

    nuestrosTours.forEach(nuestrosTours => {
        contenedorIndividual.innerHTML += `
    <div class="card">
    <form onsubmit="addProduct()">
    <div class="card-body">
    <h5 id="precio" class="card-title">${nuestrosTours.name} $</h5>
    <h5 id="precio" class="card-title">${nuestrosTours.price} $</h5>
    <select id="cantidad" class="form-select form-select-sm">
        <option value = "none" disable hidden>Select an Option</option>
        <option selected value = "1">1 unidad </option>
        <option value = "2">2 unidades </option>
        <option value = "3">3 unidades </option>
    </select>
    <div id="botonera">
        <input type="submit" value = "Comprar">
    </div>
    <p id="description" class="card-text">
        ${nuestrosTours.description}
    </p>
    </div>
    </div>
`; 
contenedornuestrosTours.append(contenedorIndividual);

})};



