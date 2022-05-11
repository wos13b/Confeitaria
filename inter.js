conteudo = document.getElementById('conteudo')
logo = document.getElementById('logo')
conteudo.addEventListener('click', conteudo_click)
conteudo.addEventListener('mouseenter', conteudo_enter)
conteudo.addEventListener('mouseout', conteudo_exit)

function conteudo_click(){

    conteudo.classList.toggle('active')

}
function conteudo_enter(){

    conteudo.style.background = '#3f3f3f'

}
function conteudo_exit(){

    conteudo.style.background = 'black'

}