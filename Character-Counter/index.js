

const textAreaEl=document.getElementById('text-area')
const totalCounterEl=document.getElementById('total-counter')
const remainingCounter=document.getElementById('remaining-counter')

// get what the max lengh of text box is set to , 
const maxAllowed=textAreaEl.getAttribute('maxLength')
 
// for every letter typed, 
textAreaEl.addEventListener('keyup', ()=>{
    updateCounter()
})

// 
function updateCounter(){

    totalCounterEl.innerText = textAreaEl.value.length;

    remainingCounter.innerText= maxAllowed-textAreaEl.value.length;


}