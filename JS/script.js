let menu = document.getElementById('menu');
let link = document.getElementById('link');
let close = document.getElementById('close');

menu.addEventListener("click",()=>{
    link.style.display = 'flex';
    menu.style.display = 'none';
    close.style.display = 'flex'
})

close.addEventListener("click",()=>{
    link.style.display = 'none';
    menu.style.display = 'flex';
    close.style.display = 'none';
})