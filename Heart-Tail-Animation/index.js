// get body section, 
const bodyEl=document.querySelector('body')



bodyEl.addEventListener('mousemove', (event)=>{

    //  get x and y postion of mouse, 
    const xPosition=event.offsetX;
    const yPosition=event.offsetY;

    // create new span, with random size, css applied, 
    const newSpan=document.createElement('span')
    const size=Math.random()*100
    newSpan.style.left=xPosition+'px';
    newSpan.style.top=yPosition+'px';
    newSpan.style.width=size+'px';
    newSpan.style.height=size+'px';

    bodyEl.appendChild(newSpan);

    // every 3s, the newly created span disappears, 
    setTimeout(() => {
        newSpan.remove()
    }, 3000);




})