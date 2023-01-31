let btnOpen = document.querySelector('.openMenu')
let btnClose = document.querySelector('.closeMenu')

const menuMobile = document.querySelector('.menu-navigation')

const toggleMenu = {
    open: function() {

        btnOpen.classList.add('menu-hiden')
        btnClose.classList.remove('menu-hiden')
        menuMobile.classList.remove('menu-hiden')
    },
    close: function() {
        
        btnOpen.classList.remove('menu-hiden')
        btnClose.classList.add('menu-hiden')
        menuMobile.classList.add('menu-hiden')
    }
} 

