const sideMenu = document.querySelector("aside");
const menuuBtn = document.querySelector("#menu-btn");
const closeBtn =  document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggle");


menuuBtn.addEventListener('click',() => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})


themeToggle.addEventListener.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})

