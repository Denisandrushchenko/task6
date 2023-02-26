'use strict'

let allLi = document.querySelectorAll('li') ;

console.log(allLi)

allLi.forEach(element => {
   console.log(element.innerHTML)
    
});



allLi.forEach(element => {
    console.log(element.innerHTML)
    
});


let liTag = document.getElementsByClassName('test')

console.log(liTag)

for(let i = 0 ; i < 4 ; i++){
allLi[i].style.backgroundColor = 'blue'
}