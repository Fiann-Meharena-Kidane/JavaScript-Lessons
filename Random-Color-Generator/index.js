const containerEl=document.querySelector('.container');


// create ten divs, fill their text field with, color code, and use the same color generated 
// from colorCode() for their background color, append them to container element, 
for(let i=0; i<10; i++){
    const newDiv=document.createElement('div');
    newDiv.style.backgroundColor=colorCode();
    newDiv.innerText=colorCode();
    newDiv.style.margin='5px';
    newDiv.style.width='30%';
    newDiv.style.textAlign='center';
    newDiv.style.display='flex';
    newDiv.style.justifyContent='center';

    containerEl.appendChild(newDiv);
}


// function to generate a random color in hexadecimal format, 
function colorCode(){
    const chars='0123456789abcdef';
    let myColor='';

    for (let i=0; i <6; i++){

        const randomNumber=Math.floor(Math.random()*15);
        // user random number to get index of an element in the char string and append it to myColor string, 
        myColor+= chars.substring(randomNumber, (randomNumber+1))  
        
    }

    // return hexadecimal color code, 
    return `#${myColor}`;


}




