var letterIndex=0;
const actualHeading="Next generation digital banking";

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
    const mainHeading=document.querySelector(".leftContent h1");
    mainHeading.innerText=createRandomString(4)+" "+createRandomString(10) + " " + createRandomString(7)+" "+createRandomString(7);
    document.body.style.opacity = 1;
    setTimeout(typeHeading,500);
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

function typeHeading(){
    const heading=document.querySelector(".leftContent h1");
    if(letterIndex<actualHeading.length){
        const currentHeading=heading.innerText;
        heading.innerText=currentHeading.substring(0,letterIndex)+actualHeading.charAt(letterIndex)+currentHeading.substring(letterIndex+1);
        letterIndex++;
        setTimeout(typeHeading,50);
    }
}

function createRandomString(length) {
    const chars = "abcdefhijklnpqrstuvxz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  