var person = document.getElementById("person");
var scope = document.getElementById("scope");


const helpAnimation = {
    targets: '#container h1',
    translateY: '-5rem',
    delay: anime.stagger(50),
    direction: 'alternate',
    easing: 'easeInOutBounce',
    duration: 5000,
    loop: true,
    autoplay: false,
}

const zoomAnimation = {
    targets: [person, scope],
    scale: 2,
    duration: 1000,
    loop: true,
    direction: 'alternate',
}

const help = anime(helpAnimation);
const zoom = anime(zoomAnimation);

const playBtn = document.querySelector
("#play");
const pauseBtn = document.querySelector
("#pause");
const stopBtn = document.querySelector
("#stop");

playBtn.addEventListener("click", function(){
    help.play();
    zoom.play();
});
pauseBtn.addEventListener("click", function(){
    help.pause();
    zoom.pause();
});
stopBtn.addEventListener("click", function(){
    help.restart();
    zoom.restart();
    help.pause();
    zoom.pause();
});


