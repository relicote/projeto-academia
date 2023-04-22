/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateImc = (e) =>{
    e.preventDefault()

    // validando se os campos tem valor 
    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // imprimindo mensagem
        calculateMessage.textContent = 'Digite seu peso e altura 👨🏾‍💻'

        // removendo a mensagem após 3s
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000);
    } else {
        // formula do IMC
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            imc = Math.round(kg / (cm * cm))

        // imprimir o IMC
        if(imc < 18.5){
            // adicionar cor e imprimir mensagem
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'O seu IMC é: ' +imc+ '. Você está magro. 😓' 
        } else if(imc <25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'O seu IMC é: ' +imc+ '. Você está saudável. 🥳' 
        } else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'O seu IMC é: ' +imc+ '. Você está sobrepeso. 😓' 
        }

        // limpando o campo de input
        calculateCm.value = ''
        calculateKg.value = ''

        // removendo a mensagem de resposta
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateImc)

/*=============== EMAIL JS ===============*/
