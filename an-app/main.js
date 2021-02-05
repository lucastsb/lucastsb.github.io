const modal = document.getElementById('modal')
const modalBtn = document.getElementById('btnRegister')
const toggleBtn = document.getElementById('menu-toggle-btn')
const closeBtn = document.getElementsByClassName('modal-close-btn')[0]
const menuToggle = document.getElementsByClassName('menu-toggle')[0]
const toggle = document.getElementById('open-menu-toggle')
const closeToggle = document.getElementById('close-toggle')

const modal2 = document.getElementById('modal2')
const linkModal2 = document.getElementById('login')

modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', clickOutside)
toggleBtn.addEventListener('click', openToggle)
linkModal2.addEventListener('click', openModal2)



function openModal2(){
    modal2.style.display = 'block'
}

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    
    if (e.target == modal){
        modal.style.display = 'none'
    } if (e.target == toggle){
        toggle.style.display = 'none'
    } else if (e.target == modal2){
        modal2.style.display = 'none'
    }
}

function openToggle() {
    modal.style.display = 'block'
}


