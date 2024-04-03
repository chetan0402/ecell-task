const burger=document.getElementsByClassName("hamburger")[0];
burger.addEventListener('click',()=>{
    const burgerImg = burger.querySelector('img');
    if(burgerImg.src.includes("/images/icon-close.svg")){
        burgerImg.src = '/images/icon-hamburger.svg';
        const burgerContainer=document.getElementsByClassName('burgerContainer')[0];
        burgerContainer.style.opacity=0;
        return;
    }
    const burgerContainer=document.getElementsByClassName('burgerContainer')[0];
    burgerContainer.style.opacity=1;
    burgerImg.src = '/images/icon-close.svg';
});