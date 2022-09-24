
// get all elements, 
const hourEl=document.getElementById('hours')
const minuteEl=document.getElementById('minutes')
const secondsEl=document.getElementById('seconds')
const ampmEl=document.getElementById('am-pm')   


// function to fill elements with respective time, 

function updateClock(){

    // get current hr, min, and sec
    let h= new Date().getHours()
    let m= new Date().getMinutes()
    let s= new Date().getSeconds()
    let ampm= 'AM'

    if (h > 12){
        h=h-12
        ampm='PM'

    }

    // format timing to be two digits, 
   h= h <10 ? "0"+h: h;
   m= m < 10 ? "0"+m: m; 
   s= s < 10 ? "0"+s: s;

    // change elemenets with timing, 
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText =  s;
    ampmEl.innerText= 'PM';
    // after 1 sec, call update function, 
    setTimeout(() => {
        updateClock()
    }, 1000)


}

updateClock()

