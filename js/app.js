/**
 * Objetos de los alimentos
 */
const food = [
    {
        name: "Hamburguesa",
        img: "foods/hamburguesa.png",
        calories: 300,
    },
    {
        name: "Soda",
        img: "foods/soda.png",
        calories: 200    
    },
    {
        name: "Sorbete",
        img: "foods/sorbete.png",
        calories: 170,
    },
    {
        name: "Pizza",
        img: "foods/Pizza.png",
        calories: 330,
    },
]

/**
 * Constante que contiene los elementos HTML
 */
const body = document.querySelector("body")
const cbxModo = document.getElementById('cbx-modo');
const lblCalories = document.getElementById('number-calories');
const sectionFood = document.getElementById('section-food');

/**
 * Contador de las calorías
 */
let calories = 0;

showFood();

/**
 * Método para msotrar las comidas
 */
function showFood () {
    let container = ""
    food.forEach((row) => {
        container += `
        <button class="no-active" value="${row.calories}"><img src="img/${row.img}" alt="${row.name}"></button>
        `
    })
    sectionFood.innerHTML = container;
    loadEvent();
}

/**
 * Método para cargar el evento
 */
function loadEvent(){
    let btns = document.querySelectorAll("section button");
    Array.from(btns).forEach( btn =>{
        btn.addEventListener("click",()=>{
            countCalories(btn);
        })
    })
}

/**
 * Evento del checkbox para activar/desactivar el modo oscuro
 */
cbxModo.addEventListener("click",() => {
    body.classList.toggle("darkMode");
})

/**
 * Método para llevar el control de caloría 
 * @param {*} element es el botón al que se dio click
 */
function countCalories (element) {
    if (element.className.includes("no-active")){
        element.className = "active";
        sumCalories(parseInt(element.value));
    } else {
        element.className = "no-active";
        restCalories(parseInt(element.value));
    }
    lblCalories.innerHTML = calories;
}

/**
 * Método para sumar las calorías 
 * @param {*} number es la cantidad a sumar
 */
function sumCalories (number) {
    calories += number;    
}

/**
 * Método para restar las calorías
 * @param {*} number es el cantidad a restar
 */
function restCalories (number) {
    calories -= number;
    if (calories < 0)
        calories = 0;
}