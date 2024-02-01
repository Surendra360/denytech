var tl = gsap.timeline()
tl.from(".nav-part1 h4, i, .nav-part2 h2, .nav-part3 button",{
    y:-20,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.1,

})

tl.from(".main h3",{
    scale:0,

})

tl.from("#img1, #img2, #img3, #img4, #img5",{
    rotate:-45,
    stagger:0.1,
    opacity:0,
    scale:0.5
})