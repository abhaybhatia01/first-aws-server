

gsap.set(".cursor-wrapper", {xPercent: -50, yPercent: -50});
let xTo = gsap.quickTo(".cursor-wrapper", "x", {duration: 0.4, ease: "power3"});
let  yTo = gsap.quickTo(".cursor-wrapper", "y", {duration: 0.4, ease: "power3"});
window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
});

const cursor_wrapper = document.querySelector('.cursor-wrapper')
//event listener for links
document.querySelectorAll('.big-cursor').forEach(item => {
item.addEventListener('mouseenter', link_hover_cursor);
item.addEventListener('mouseleave', link_unhover_cursor);
//Hover behaviour
function link_hover_cursor(e) { cursor_wrapper.classList.add('link_cursor_hover'); }
function link_unhover_cursor(e) { cursor_wrapper.classList.remove('link_cursor_hover'); }
})
//event listener for products
document.querySelectorAll('.product-cursor').forEach(item => {
    item.addEventListener('mouseenter', product_hover_cursor);
    item.addEventListener('mouseleave', product_unhover_cursor);
    //Hover behaviour
    function product_hover_cursor(e) { cursor_wrapper.classList.add('product_cursor_hover'); }
    function product_unhover_cursor(e) { cursor_wrapper.classList.remove('product_cursor_hover'); }
    })

//mouse enter and leave  the window
document.addEventListener('mouseleave',()=>{
    cursor_wrapper.classList.add('mouse-out');
})
document.addEventListener('mouseenter',()=>{
    cursor_wrapper.classList.remove('mouse-out');
})

