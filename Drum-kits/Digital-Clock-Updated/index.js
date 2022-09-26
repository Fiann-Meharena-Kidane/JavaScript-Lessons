const numbers=[1,2,3,4,5,6,7,8,9,10,11,12];


const clockEl=document.querySelector('.clock');


// draw numbers, 
numbers.forEach(number => {
    const numberEl=document.createElement('div')
    numberEl.classList.add('number', `number${number}`);
    numberEl.innerText=number
    numberEl.style.transform=`rotate(${number*30}deg)`
    clockEl.appendChild(numberEl);

});


// draw hands 

