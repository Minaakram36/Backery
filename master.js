var navreference= document.getElementById('nav');
var reftextcolor=document.querySelectorAll('nav ul li  a');
window.onscroll = function () {
    let currentScrollPos=window.scrollY;

    if(currentScrollPos==0){
       navreference.style.backgroundColor="rgba(0,0,0,0)"
       navreference.style.paddingTop="15px"
       navreference.style.paddingBottom="15px"
       document.querySelector('nav img').src="images/bakery-light-1.png";
       for (let i = 0; i < reftextcolor.length; i++) {
        reftextcolor[i].classList.remove('text-black');
        reftextcolor[i].classList.add('text-white');
       }
       
    }
    if(currentScrollPos>0 && currentScrollPos<30){
        navreference.style.paddingTop= `${15-(currentScrollPos)}px`
        navreference.style.paddingBottom=`${15-(currentScrollPos)}px`
    }
    if(currentScrollPos>30){
        navreference.style.backgroundColor="white"
        navreference.style.paddingTop="0px"
        navreference.style.paddingBottom="0px"
        
        document.querySelector('nav img').src="images/bakery-color.png";
        for (let i = 0; i < reftextcolor.length; i++) {
            
            reftextcolor[i].classList.remove('text-white');
            reftextcolor[i].classList.add('text-black');
           }
    }
   
  }
  