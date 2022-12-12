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



const help = anime(helpAnimation);

const playBtn = document.querySelector
("#play");
const pauseBtn = document.querySelector
("#pause");
const stopBtn = document.querySelector
("#stop");

playBtn.addEventListener("click", help.play);
pauseBtn.addEventListener("click", help.pause);
stopBtn.addEventListener("click", function(){
 help.restart();
 help.pause();
})


