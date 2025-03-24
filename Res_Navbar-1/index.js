let menuList = document.querySelector('.menu-list');
let btn = document.querySelector('.btn');
let wrapper = document.querySelector('#wrapper');


btn.addEventListener('click',(e)=>{
        if(menuList.style.display == "none"){
            menuList.style.display= "flex";
        }
        else{
            menuList.style.display = "none";
        }
    })

//Instead of using maxheight we have USED DISPLAY PROPERTY WHICH IS MORE FLEXIBLE TO USE and not confusing anyone.

//The simplest way to make a responsive and functional navbar is to play with its display property.When we add media queries to it at that moment we make display of the menulist which is our ul none then in the .js file we have selected the button and menulist and added an eventlistener to the btn and put a condition if the display is none then make it display and we don't need to specify the height and width coz we have already defined the padding and gaps in the media query though we can add height in js condition but no need to that as you can manipulate it in the media query.

//This is the simplest yet responsive navbar you can make.

// ISSUES
// - No smooth animations
// - On second click you will get to see the menulist.