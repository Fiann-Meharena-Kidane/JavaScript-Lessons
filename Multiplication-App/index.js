
// generate two random numbers between 1 and 10
const num1= Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)

// get updated score from local storage
let score=JSON.parse(localStorage.getItem('score'))


// in case score is not accessible, we set it to 0
if(!score){
    score=0;
}

const questionEl=document.getElementById("question")

questionEl.innerText=`What is ${num1} times ${num2} ?`

const formEl=document.getElementById('form')    
const inputEL=document.getElementById('input')
const scoreEl=document.getElementById('score')

scoreEl.innerText=`Score : ${score}`

const correctAnswer=num1*num2


// event listener, on submit, execute the callback function, 

formEl.addEventListener('submit', ()=>{

        // get the value on input field, convert it to int, 
        const userAnswer= +inputEL.value

        if(userAnswer===correctAnswer){
            score++;
            // update local storage, with key:vale ('score':string score)
            localStorage.setItem('score',JSON.stringify(score));
            scoreEl.innerText=`Score : ${score}`
        }
        else{
            // if score goes negative, keep it zero
            score= score <0 ? 0 : score --;
            localStorage.setItem('score',JSON.stringify(score));
            scoreEl.innerText=`Score : ${score}`
        }
        
})


