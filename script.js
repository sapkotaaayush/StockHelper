var tl = gsap.timeline()
var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")
tl.to("#full", {
    right: 0,
    duration:1,
})

tl.from("#full h4", {
    x: 150,
    duration: 0.7,
    stagger: 0.2,
    opacity:0,
})

tl.from("#full i",{
    opacity:0,
})

