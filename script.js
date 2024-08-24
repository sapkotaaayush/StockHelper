var tl = gsap.timeline()
var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

function splitTheText(){
    var h1 = document.querySelector("#title h1")
    h1Text = h1.textContent

    var clutter = ""
var splittedText = h1Text.split("")
console.log(splittedText)
    splittedText.forEach(function(letters){
        console.log(letters)
        clutter += `<span>${letters}</span>`
    })
    console.log(clutter)
    h1.innerHTML =  clutter
}

splitTheText()

tl.to("#full", {
    right: 0,
    duration:0.5,
})

tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity:0,
})

tl.from("#full i",{
    opacity:0,
})

tl.pause()

menu.addEventListener("click" , function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})


gsap.from("h1 span", {
    y: 100,
    opacity: 0,
    duration:1,
    delay: 0.5,
    stagger:0.3,
})