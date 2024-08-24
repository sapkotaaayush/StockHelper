var tl = gsap.timeline()
var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

function splitTheText(){
    var h1 = document.querySelector("#title h1")
    h1Text = h1.textContent

    var clutter = ""

var splittedText = h1Text.split("")
var halfText = splittedText.length/2
console.log(halfText)


    splittedText.forEach(function(letters , index){
        if(index < halfText) {
        clutter += `<span class = "firstSplit" >${letters}</span>`
        }
        else{
              clutter += `<span class = "secondSplit" >${letters}</span>`
        }
    })
  
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


gsap.from("h1 .firstSplit", {
    y: 50,
    opacity: 0,
    duration:0.8,
    delay: 0.35,
    stagger:0.15,
})

gsap.from("h1 .secondSplit", {
    y: -50,
    opacity: 0,
    duration:0.8,
    delay: 0.75,
    stagger:0.15,
})

