const openbtn = document.querySelector('.ham-btn');
const sidebar = document.querySelector('.navigation-links-sidebar');
const buttons = document.querySelector('.navigation-buttons-sidebar');
const clbtn = document.querySelector('.cl-btn')

openbtn.addEventListener('click',(e)=>{
    if(window.innerWidth <= 722){
        sidebar.classList.add('open');
        buttons.classList.add('open');
    }
});

window.addEventListener('resize',(e)=>{
    if(window.innerWidth >=722){
        sidebar.classList.remove('open');
        buttons.classList.remove('open');
    }
})

clbtn.addEventListener("click",(e)=>{
    sidebar.classList.remove('open');
    buttons.classList.remove('open');
})

