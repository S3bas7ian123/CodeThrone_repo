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
const loginBtn = document.querySelector('.subBtn');
const cBtn = document.querySelector('.cancelBtn');
// console.log(loginBtn, cBtn);

/* SETTINGS */
titleHuge.classList.add('setHuge');
titleTiny.classList.add('setTiny');
para.classList.add('setPara');

/* FUNCTIONS */
icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('mouseEnterIcons');
    })

    icon.addEventListener('mouseleave', ()=> {
        icon.classList.remove('mouseEnterIcons');
    })
});

loginBtn.addEventListener('click' , () => {
    document.querySelector('#containerForm').style.display = 'block';
})

cBtn.addEventListener('click', () => {
     document.querySelector('#containerForm').style.display = 'none';
})







