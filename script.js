gsap.from(".content1 h4,button",{
    duration:1.5,
    x:700,
    scrollTrigger:{
        trigger:".content1 h4,button",
        scroller:"body",
        // markers:true,
        start:"top 120%",
        end:"top 40%",
        scrub:5
    }
    

})


// gsap.from(".collections",{
//     duration:1.5,
//     x:700,
//     scrollTrigger:{
//         trigger:".content1 h4,button",
//         scroller:"body",
//         // markers:true,
//         start:"top 120%",
//         end:"top 40%",
//         scrub:5
//     }
    

// })

