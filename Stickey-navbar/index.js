const navbarEl=document.querySelector('.navbar');



window.addEventListener('scroll', ()=>{

    const currentHeight=window.scrollY
    const bottomPoint=window.innerHeight

    console.log(currentHeight, bottomPoint)

    if (currentHeight -bottomPoint){
        navbarEl.classList.add('active');
    }else{
        navbarEl.classList.remove('active');
    }
    
})

