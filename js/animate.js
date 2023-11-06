// textswitch and animation anime.js 
let styleindex = 0;
let stylearray = [
    "GRAB COFFEE",
    "TALK DESIGN",
    "WORK TOGETHER",
    "MEET ON ZOOM",
    "DO LUNCH",
    "COLLABORATE",
    "WORK TOGETHER",
];
// Wrap every letter in a span
function letterTricks() {
    let textWrapper = document.querySelector(".text-switch");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
    );
    do_animate();
}
// function to animate latter in text-switch class
function do_animate() {
    anime
        .timeline({ loop: true })
        .add({
            targets: ".text-switch .letter",
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: (el, i) => 300 + 30 * i,
        })
        .add({
            targets: ".text-switch .letter",
            translateY: [0, -100],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: (el, i) => 100 + 30 * i,
            complete: function (anim) {
                // enables text switch
                let textWrapper = document.querySelector(".text-switch");
                textWrapper.textContent = stylearray[styleindex];
                styleindex++;
                if (styleindex >= stylearray.length) {
                    styleindex = 0;
                }
                letterTricks();
            },
        });
}
// executing  textswitch and animation anime.js
setTimeout(() => {
    letterTricks();
}, 1000);





    
