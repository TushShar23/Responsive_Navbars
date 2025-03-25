let showbtn = document.querySelector('.showbtn');
let closebtn = document.querySelector('.clbtn')
let sidebar = document.querySelector('.sidebar');



showbtn.addEventListener('click',(e)=>{
    if(window.innerWidth <=600){
        sidebar.style.display = "flex";
    }
    
});

window.addEventListener('resize',(e)=>{
    if(window.innerWidth > 600){
        sidebar.style.display = "none";
        
    }
})
closebtn.addEventListener('click',(e)=>{
    sidebar.style.display = "none";
});