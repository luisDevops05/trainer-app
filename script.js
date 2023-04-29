console.log('script is running')


const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu') 

const rotateimg = document.getElementById('hero-img')
0


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}) 


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))