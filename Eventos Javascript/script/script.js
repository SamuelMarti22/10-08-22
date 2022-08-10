let cont=0
let boton = document.querySelector('button')
let parrafo =document.querySelector('p')
let texto= document.querySelector('.nombre').value
let caja= document.querySelector('.nombre')
boton.addEventListener('click',()=>{
    cont+=1
    parrafo.textContent=cont
})
boton.addEventListener('mouseover',()=>{
    boton.style.backgroundColor='green'
})
boton.addEventListener('mouseout', ()=>{
    boton.style.backgroundColor='white'
})
caja.addEventListener('focus',()=>{
    caja.style.backgroundColor='red'
})
caja.addEventListener('blur',()=>{
    caja.style.backgroundColor='white'
})
caja.addEventListener('keypress',()=>{
    parrafo.textContent=texto
})