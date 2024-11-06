const sideMenu = document.querySelector('#sideMenu');

const openMenu = ()=>{
  sideMenu.style.transform = 'translateX(-16rem)';
}

const closeMenu = ()=>{
  sideMenu.style.transform = 'translateX(16rem)';
}