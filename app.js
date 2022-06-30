'use strict';

let scrollContent = window.scrollY + 500;

const staticImg="./images/mimo_home_static.png";
const gifImg ="./images/mimo_home.gif";

const image = document.querySelector('.home__avartar');
image.src = gifImg;

const home = document.querySelector('.home__container');
const homeHeight =home.getBoundingClientRect().height;

document.addEventListener('scroll',function() {
    if(window.scrollY > homeHeight / 2) {
        image.src = staticImg;
    } else {
        image.src = gifImg;
    }
})


/* intersectionObserver(무한스크롤) */ 

const sectionH3 = document.querySelectorAll('h3');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
sectionH3.forEach((el) => { observer.observe(el);})

const barList = document.querySelectorAll('.skill')
const skillSection = document.querySelector('.skills__container')
const skillHeight = window.scrollY + skillSection.getBoundingClientRect().top

document.addEventListener('scroll', function() {
    barList.forEach(bar => {
        if(window.scrollY + 600 >= skillHeight) {
            bar.classList.add('active')
        } else {
            bar.classList.remove('active');
        }
    })
})




// let ing = false;
// ing = (window.scrollY > skillHeight / 2) ? true : false;

// document.addEventListener('scroll', function() {
//     if(ing === true) {
//         barList.forEach(bar => {
//         const barWidth = bar.innerHTML;
//         const barWidthNum = barWidth.substring(0,2);

//         let t = 0
//         bar.style.width = 0
//         const barAnimation = setInterval(() => {
//             bar.style.width =  t + '%';
//             t++ >= barWidthNum && clearInterval(barAnimation)
//         }, 10)
//     })
//     } else {
//         ing = false
//     }
// })
