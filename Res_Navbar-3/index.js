let menubtn = document.querySelector('.ham-btn');
let clbtn = document.querySelector('.cls-btn');
let navmenu = document.querySelector('.navigation-ul');





menubtn.addEventListener('click',(e)=>{
    if(window.innerWidth <= 700){
        navmenu.classList.toggle('open');
        // navmenu.classList.toggle('.close');
    }
});


// clbtn.addEventListener('click',(e)=>{
//     navmenu.classList.remove('open');
// });


