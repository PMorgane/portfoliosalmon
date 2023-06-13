// menu responsive code
var menu = document.querySelector('.menu');
var menu_toggle = document.querySelector('.menu_toggle');

menu_toggle.onclick = function(){
   menu_toggle.classList.toggle('active');
   menu.classList.toggle('responsive');
}

//site animation

const header = document.querySelector('header');
const title_span = document.querySelectorAll('.left h1 span');
const p = document.querySelector('.left p')
const a = document.querySelector('.left a')
const img = document.querySelector('.image_profil')

window.addEventListener('load',()=>{
   
    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(header , 2 , {y:-100 , opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(img , 1 , {x:1000 , opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(title_span, 1 , {opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(p, 1 , {opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(a , 1 , {opacity:0, ease: "power2.out"}, 0.1)
    
    TL.play()
})

// texte apparait disparait
const text = document.querySelector('.second-text');

const textLoad = () => {
    setTimeout(()=> {
        text.textContent="Developpeuse Web"
    }, 0);
    setTimeout(()=> {
        text.textContent="en recherche d'alternance"
    }, 3000);
    setTimeout(()=> {
        text.textContent="autonome, passionnée"
    }, 6000);
    setTimeout(()=> {
        text.textContent=" rigoureuse, organisée"
    }, 9000);
    setTimeout(()=> {
        text.textContent="déterminée à intégrer votre équipe"
    }, 12000); // 1s=1000milliseconds

}
textLoad();
setInterval(textLoad,15000);



/*titre*/ 
const allLetters = document.querySelectorAll('.bloc span');
const ligne = document.querySelector('.ligne');

const TLLetters = gsap.timeline();

TLLetters
.from(ligne, {width: '0%', opacity: 0, duration: 0.7, ease: "power1.in"})

.from (allLetters,{opacity:0, top: gsap.utils.wrap([100,-100]),stagger:0.1, ease:"power2.out"})
.set(ligne,{width:"85vw"})
/* affichage au scroll*/
/*
const slidingBloc = document.querySelector(".bloc");
window.addEventListener("scroll",()=>{
    const {scrollTop, clientHeight}= document.documentElement;
    
   const topElementToTopViewport= slidingBloc.getBoundingClientRect().top;
     if (scrollTop > (scrollTop + topElementToTopViewport).toFixed()-clientHeight*0.5) {
        slidingBloc.classList.add('active')
     }

})*/


/*
const options = {
    root: null,
    rootMargin: '0px',
    threshold:0.1
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry){
        console.log(entry.intersectionRatio); 
    })
   
}

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector('.reveal'));*/