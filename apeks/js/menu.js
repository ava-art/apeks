const menu = document.querySelector('.btn-menu')
const menuActive = document.querySelector('.menu-list_items-mobile')


menu.addEventListener('click', ()=>{
    menuActive.classList.toggle('menu-list_items-mobile_active');
    
});


 const image = document.querySelectorAll('.image');
 image.forEach(image => {
    image.addEventListener('click', ()=>{
        image.classList.toggle('reviews-item_popap');
     })
 });
 
