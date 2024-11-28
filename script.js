/* Dom manipulation = TITLES, PARAGRAPH */
const titleHuge = document.querySelector('h1');
const titleTiny = document.querySelector('h4');
const para = document.querySelector('p');

/* Dom manipulation = ICONS */
const iconFacebook = document.querySelector('.fa-square-facebook');
const iconTwitter = document.querySelector('.fa-square-x-twitter');
const iconInstagram= document.querySelector('.fa-square-instagram');
const icons = [iconFacebook, iconTwitter, iconInstagram];

/* Dom manipulation = BUTTON */
const contForm = document.querySelector('#containerForm');
const submit = document.querySelector('.subBtn');
const cBtn = document.querySelector('.cancelBtn');
const lBtn = document.querySelector('.logButton');
const buttons = [submit, cBtn, lBtn];
// console.log(loginBtn, cBtn);

/* Dom manipulation = MODALWINDOW */
const modalWindow = document.querySelector('.modal');

/* SETTINGS */
titleHuge.classList.add('setHuge');
titleTiny.classList.add('setTiny');
para.classList.add('setPara');

/* FUNCTIONS */
function mouseEvents() {
    icons.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('mouseHoverIcons');
        })
    
        icon.addEventListener('mouseleave', ()=> {
            icon.classList.remove('mouseHoverIcons');
        })
    });
    
    buttons.forEach((button) => {
        button.addEventListener('mouseenter' , () => {
            button.classList.add('mouseHoverButton');
        });
    
        button.addEventListener('mouseleave' , () => {
            button.classList.remove('mouseHoverButton');
        });
    });
}    

function btnsModalWind() {
    submit.addEventListener('click' , () => {
        contForm.style.display = 'block';
    
        // Utilizziamo setTimeout per ritardare l'animazione
        setTimeout(() => {
            contForm.classList.add('modalShow');
        }, 100); // Piccolo ritardo prima che inizi l'animazione 100ms = millisecondi
    });
    
    cBtn.addEventListener('click', () => {
        contForm.classList.remove('modalShow');// Rimuoviamo la classe 'modalShow' per nascondere la modale con animazione
        
        setTimeout(() => { // Dopo l'animazione, nascondiamo completamente la modale
            contForm.style.display = 'none';
        }, 500); // Dobbiamo aspettare che l'animazione finisca
    });
}

// Section where i call the functions:
mouseEvents();
btnsModalWind();

// icons.forEach((icon) => {
//     icon.addEventListener('mouseenter', () => {
//         icon.classList.add('mouseHoverIcons');
//     })

//     icon.addEventListener('mouseleave', ()=> {
//         icon.classList.remove('mouseHoverIcons');
//     })
// });

// buttons.forEach((button) => {
//     button.addEventListener('mouseenter' , () => {
//         button.classList.add('mouseHoverButton');
//     });

//     button.addEventListener('mouseleave' , () => {
//         button.classList.remove('mouseHoverButton');
//     });
// });

// submit.addEventListener('click' , () => {
//     contForm.style.display = 'block';

//     // Utilizziamo setTimeout per ritardare l'animazione
//     setTimeout(() => {
//         contForm.classList.add('modalShow');
//     }, 100); // Piccolo ritardo prima che inizi l'animazione 100ms = millisecondi
// });

// cBtn.addEventListener('click', () => {
//     contForm.classList.remove('modalShow');// Rimuoviamo la classe 'modalShow' per nascondere la modale con animazione
    
//     setTimeout(() => { // Dopo l'animazione, nascondiamo completamente la modale
//         contForm.style.display = 'none';
//     }, 500); // Dobbiamo aspettare che l'animazione finisca
// });

// window.onclick = function(closeAnywhere){
//     if(closeAnywhere.target == modalWindow) {
//         modalWindow.style.display = 'none';
//     };
// };





