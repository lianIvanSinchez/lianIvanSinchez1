const divContainer = document.getElementById('elementoAbrirCerrar');
let isClicked = true;

let showOrHide = function(){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = false;
    }
    else{
        divContainer.style.display = 'none';
        isClicked = true;
    }
}
const divContainer2 = document.getElementById('elementoAbrirCerrar2');
let isClicked2 = true;

let showOrHide2 = function(){
    if(isClicked2){
        divContainer2.style.display = 'block';
        isClicked2 = false;
    }
    else{
        divContainer2.style.display = 'none';
        isClicked2 = true;
    }
}
document.querySelector('#scrollable').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}