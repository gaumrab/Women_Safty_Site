
function pages(){
    gsap.from("#img1",{
        y: "-100px",
        duration:1,
        ease: "slow(0.7,0.7,false)",
        opacity: 0
     });
     gsap.from("#text",{
         delay: 0.3,
        x: "100px",
        duration:1.5,
        ease: "slow(0.7,0.7,false)",
        opacity: 0
     });
     gsap.from(".col-md-10",{
        delay: 1,
        y: "100px",
        duration:1.5,
        ease: "slow(0.7,0.7,false)",
        opacity: 0
     })
}
pages();

function Blog(){
    let t1 = gsap.timeline();

    t1.from("#img",{
        height: "200vh",
        width: "200vh",
        duration:0.5,
        left:0,
        ease: "circ.out",
        scale:1
    });
    
    t1.from("header h1",{
        x:"-100%",
        duration: "1",
        ease: "back.out(1.7)",
    });
    t1.from("#blogs",{
        y:"50%",
        duration: "0.8",
        ease: "slow(0.7,0.7,false)",
        opacity: 0
    });
}
Blog();

console.log("hello world");
