const titleHuge = document.querySelector('h1');
const titleTiny = document.querySelector('h4');
const para = document.querySelector('p');
const icon = document.querySelector('i');
const icons = document.querySelector('.icons');

titleHuge.classList.add('setHuge');
titleTiny.classList.add('setTiny');
para.classList.add('setPara');


icon.addEventListener('mouseenter' , () => {
    icons.classList.add('.mouseEnterIcons');
})

// i {
//     font-size: 20px;
//     color: rgb(255, 217, 111);
//     transition: all 0.3s;
// }

// button:hover {
//     color: rgba(0, 86, 173, 0.767);
//     background-color:  rgb(255, 217, 111);
// }

// .fa-square-facebook:hover, .fa-square-x-twitter:hover, .fa-square-instagram:hover {
//     color: rgba(191, 223, 255, 0.466);
// }