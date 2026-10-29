let phosphor = document.getElementById('phosphor')
let modalWindowPhosphor = document.getElementById('modalWindowPhosphor') 

phosphor.addEventListener('click', ()=>{
    modalWindowPhosphor.style.display = 'block'
})

window.addEventListener('click', ()=>{
    if (event.target === modalWindowPhosphor) {
    modalWindowPhosphor.style.display = "none"
}})

let phuneral = document.getElementById('phuneral')
let modalWindowPhuneral = document.getElementById('modalWindowPhuneral') 

phuneral.addEventListener('click', ()=>{
    modalWindowPhuneral.style.display = 'block'
})

window.addEventListener('click', ()=>{
    if (event.target === modalWindowPhuneral) {
    modalWindowPhuneral.style.display = "none"
}})

let pinkPhloyd = document.getElementById('pinkPhloyd')
let modalWindowPinkPhloyd = document.getElementById('modalWindowPinkPhloyd') 

pinkPhloyd.addEventListener('click', ()=>{
    modalWindowPinkPhloyd.style.display = 'block'
})

window.addEventListener('click', ()=>{
    if (event.target === modalWindowPinkPhloyd) {
    modalWindowPinkPhloyd.style.display = "none"
}})