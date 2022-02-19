let btnDown=document.querySelector('.down')
let btnUp=document.querySelector('.up')
let btnRight=document.querySelector('.right')
let btnLeft=document.querySelector('.left')
let btnAddBlock=document.querySelector('.add_button')
let inputSize = document.querySelector('.size_input')
let changeCol = document.querySelector('.color_input')

btnDown.addEventListener('click',blockDown)
btnUp.addEventListener('click',blockTo)
btnRight.addEventListener('click',blockRight)
btnLeft.addEventListener('click',blockLef)
btnAddBlock.addEventListener('click',addBlock)
inputSize.addEventListener('change',addBlock)
changeCol.addEventListener('change', changeColor)



let isBlock = false
let blockTop = 0;
let blockLeft = 0;
let size;


function addBlock(){
    if(isBlock == true) return
    size = document.querySelector('.size_input').value
    let wrapper = document.querySelector('.wrapper_block')
    size = +size
    if(size <= 50 || size>=500) return 
    let block = document.createElement('div')
    block.classList.add('block')
    block.style.width = size + 'px'
    block.style.height = size + 'px'
    wrapper.insertAdjacentElement('afterbegin', block)
    isBlock = true
}

function changeColor(){
    let block = document.querySelector('.block')
    let colorInput = document.querySelector('.color_input').value
    block.style.backgroundColor = colorInput
}

function blockDown(){
    let block = document.querySelector('.block')
    if(size + blockTop + 10 > 500) return
    blockTop += 10
    block.style.marginTop = blockTop + 'px'
}
function blockTo(){
    let block = document.querySelector('.block')
    if(blockTop <= 0) return
    blockTop -= 10
    block.style.marginTop = blockTop + 'px'
}
function blockRight(){
    let block = document.querySelector('.block')
    if(size + blockLeft + 10 > 500) return
    blockLeft += 10
    block.style.marginLeft =blockLeft + 'px'
}
function blockLef(){
    let block = document.querySelector('.block')
    if(blockLeft <= 0) return
    blockLeft -= 10
    block.style.marginLeft = blockLeft + 'px'
}