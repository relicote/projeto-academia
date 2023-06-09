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
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: "left"})
sr.reveal(`.choose__content, .calculate__img`, {origin: "right"})



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
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    //validar se o campo tem valor
    if(contactUser.value == ''){
        // adicionando e removendo cor
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // imprimir mensagem
        contactMessage.textContent = 'Você precisa inserir o seu email 👆🏾'

        // remover a mensagem após 3s

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    } else {
        // serviceID - templateID - #form -publicKey
        emailjs.sendForm('service_bbovqfp', 'template_kjrrq2o', '#contact-form', 'N6Diesys_uR-w2uuB')
            .then(() =>{
                // imprimir mensagem e adicionar cor
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'Seu cadastro foi realizado com sucesso!! 💪🏾'

                // remover mensagem após 3s
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)

            }, (error) =>{
                // erro ao enviar email
                alert('Ops! Algo deu errado...', error)
            })

            // limpando campo de input
            contactUser.value = ''

    }
}

contactForm.addEventListener('submit', sendEmail)