
    window.addEventListener("load", function finishPreload() {
    // setting the theme
    setTheme();


    //hiding the loader
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    //stoping the  bounce loading animation
    const bounce = document.querySelectorAll(".spinner div");
    bounce.forEach((bubble) => {
        bubble.classList.remove("loading-active");
    });

});





function setTheme(changeTo) {
    const theme = localStorage.getItem('color-scheme')
    const root = document.querySelector('.root')
    if(theme === "dark"){
        console.log("dark found")
        root.classList.add("dark-theme")
        root.classList.remove('light-theme')
    }
    else if(theme === "light"){
        console.log("light found")
        root.classList.add("light-theme")
        root.classList.remove('dark-theme')
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark mode is preferred
        console.log("dark prefers")
        root.classList.add('dark-theme')
        root.classList.remove('light-theme')
    } else {
    // Light mode is preferred
        console.log("light prefers")
        root.classList.add('light-theme')
        root.classList.remove('dark-theme')
    }
}






// document
//     .querySelector(".img")
//     .addEventListener("click", function preload() {
//         //bringing back the loader
//         const loader = document.querySelector(".loader");
//         loader.classList.remove("loader-hidden");
//         //adding bounce loading animation
//         const bounce = document.querySelectorAll(".spinner div");
//         bounce.forEach((bubble) => {
//             bubble.classList.add("loading-active");
//         });
//     });