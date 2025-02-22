let contenedor = document.getElementById("contenido");


let nuevoTitulo = document.createElement("h2");
nuevoTitulo.style.color = "#6ad2f7";
nuevoTitulo.innerText = "Manual de Prácticas";
contenedor.appendChild(nuevoTitulo);


let ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.padding = "0";

let items = [
    "Ser siempre alguien dinámico y autodidacta con nuestro aprendizaje.",
    "Mantener una actitud positiva ante los retos.",
    "Siempre estar atento a la frase 'SE VIENEN COSITAS'.",
    "Trabajar en equipo para mejorar habilidades.",
    "Si teacher Irvin se viste elegante, no tengas miedo, a menos que les haya comentado que tienen una actividad recreativa.",
    "No tener miedo a preguntar en clases.",
    "Apoyarte de tus compañeros de clases.",
    "Nunca tengas miedo en preguntar.",
    "El teacher Irvin va a ser tu apoyo incondicional."
];

let frasesMotivacionales = [
    "El aprendizaje nunca termina, sigue adelante.",
    "Cada reto es una oportunidad de crecer.",
    "Grandes cosas están por venir, confía.",
    "El trabajo en equipo hace los sueños realidad.",
    "La preparación es clave para el éxito.",
    "Preguntar es el primer paso para aprender.",
    "Tus compañeros son tu mejor apoyo, confía en ellos.",
    "Las preguntas son la clave del conocimiento. ¡No dudes en hacerlas!",
    "Siempre habrá alguien dispuesto a apoyarte, ¡confía en quienes te guían!" 
];

items.forEach((texto, index) => {
    let li = document.createElement("li");
    li.innerText = texto;
    
    // colorcitos de fondo
    li.style.backgroundColor = index % 2 === 0 ? "#6ad2f7" : "#90ee90";
    li.style.color = "black"; 
    li.style.padding = "15px"; 
    li.style.margin = "10px 0"; 
    li.style.borderRadius = "10px"; 
    li.style.cursor = "pointer"; 
    li.style.textAlign = "center"; 


    li.onclick = () => alert(frasesMotivacionales[index]);

    ul.appendChild(li);
});

contenedor.appendChild(ul);




