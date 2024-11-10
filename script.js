const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul'); 

const openMenu = ()=>{
  sideMenu.style.transform = 'translateX(-16rem)';
}

const closeMenu = ()=>{
  sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll',()=>{
  if(scrollY > 50){
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg','shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.remove('bg-white', 'bg-opacity-50','shadow-sm', 'dark:border','dark:border-white/50','dark-bg-transparent');
  }else{
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg','shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.add('bg-white', 'bg-opacity-50','shadow-sm', 'dark:border','dark:border-white/50','dark-bg-transparent');
  }
}) 


// -------------- Light Mode and Dark Mode -------------- 
// Initial theme setting based on localStorage or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Toggle theme and update localStorage
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark'); // Toggle dark mode

  // Update localStorage based on the new class state
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
};
