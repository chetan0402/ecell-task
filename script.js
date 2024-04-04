const burger=document.getElementsByClassName("hamburger")[0];
burger.addEventListener('click',()=>{
    const burgerImg = burger.querySelector('img');
    if(burgerImg.src.includes("/images/icon-close.svg")){
        burgerImg.src = '/images/icon-hamburger.svg';
        const burgerContainer=document.getElementsByClassName('burgerContainer')[0];
        burgerContainer.style.opacity=0;
        burgerContainer.style.zIndex=-1;
        return;
    }
    const burgerContainer=document.getElementsByClassName('burgerContainer')[0];
    burgerContainer.style.opacity=1;
    burgerContainer.style.zIndex=2;
    burgerImg.src = '/images/icon-close.svg';
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 1;
});

document.addEventListener("scroll", () => {
    const sections=document.querySelectorAll('section');
    for(var i=0;i<sections.length;i++){
        const section=sections[i];
        const bounding=section.getBoundingClientRect();
        if (bounding.top <= window.innerHeight-100) {
            section.style.opacity = 1;
        }
    }
});