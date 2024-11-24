const titleHuge = document.querySelector('h1');
const titleTiny = document.querySelector('h4');
const para = document.querySelector('p');
const iconFacebook = document.querySelector('.fa-square-facebook');
const iconTwitter = document.querySelector('.fa-square-x-twitter');
const iconInstagram= document.querySelector('.fa-square-instagram');
const icons = [iconFacebook, iconTwitter, iconInstagram];



titleHuge.classList.add('setHuge');
titleTiny.classList.add('setTiny');
para.classList.add('setPara');


icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('mouseEnterIcons');
    })

    icon.addEventListener('mouseleave', ()=> {
        icon.classList.remove('mouseEnterIcons');
    })
});

// button:hover {
//     color: rgba(0, 86, 173, 0.767);
//     background-color:  rgb(255, 217, 111);
// }
