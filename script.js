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

submit.addEventListener('click' , () => {
    document.querySelector('#containerForm').style.display = 'block';
});

cBtn.addEventListener('click', () => {
     document.querySelector('#containerForm').style.display = 'none';
});

window.onclick = function(closeAnywhere){
    if(closeAnywhere.target == modalWindow) {
        modalWindow.style.display = 'none';
    };
};





