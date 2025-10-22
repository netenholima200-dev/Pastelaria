const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('bnt-script')

menuDiv.addEventListener('click', animarMenu)
function animarMenu() {
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}