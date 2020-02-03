let pubg = document.querySelector('.pubg-bg');
let jugg = document.querySelector('.jugg-bg');
let tracer = document.querySelector('.tracer-bg');
let content = document.querySelector('.content');
content.onmouseover = content.onmouseout ;

const parallax = (event) => {

    let x1 = (event.pageX * -1 / 30);
    let y1 = (event.pageY * -1 / 30);
    let x2 = (event.pageX * -1 / 10);
    let y2 = (event.pageY * -1 / 10);
    let x3 = (event.pageX * -1 / 50);
    let y3 = (event.pageY * -1 / 50);

    pubg.style.transform = 'translate3d('+x1 + 'px,'+y1 +'px,0)';
    jugg.style.transform = 'translate3d('+x2 + 'px,'+y2 +'px,0)';
    tracer.style.transform = 'translate3d('+x3 + 'px,'+y3 +'px,0)';

    // console.log(event)
};

content.addEventListener('mousemove', parallax);


// console.log(pubg);
