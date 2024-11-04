const hamburgerMenu=document.getElementById('hamburger')
        const navMenu = document.getElementById('nav-menu')
        hamburgerMenu.addEventListener('click',()=>{
            navMenu.classList.toggle('active');
            hamburgerMenu.classList.toggle('active')
        })