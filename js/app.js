function hamburgerMenu(){
  const menu = document.getElementById('menu-bar');
  const navbar = document.querySelector('.navbar');
  menu.addEventListener('click', ()=>{
    console.log('click');
    navbar.classList.toggle('active')
  })
}
hamburgerMenu();