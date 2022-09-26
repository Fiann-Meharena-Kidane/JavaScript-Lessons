setInterval(setClock, 1000);

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


// move hands 

const currentDate= new Date();

function setClock(){

    const currentSecond=currentDate.getSeconds()
    const currentMinute=currentDate.getMinutes()
    const currentHour=currentDate.getHours()
    
    const hour=document.querySelector('[data-hour]')
    const minute=document.querySelector('[data-minute]')
    const second=document.querySelector('[data-second]')

    second.style.setProperty('--rotation', currentSecond*30);

    

}











