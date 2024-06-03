function start() {
    let t1 = gsap.timeline();

    t1.from("nav", {
        x: "-100%",
        duration: 0.5,
    });
    t1.from("nav .logo", {
        y: "-50%",
        duration: 1,
        opacity: 0
    }, "all");
    t1.from("nav ul li", {
        y: "-50%",
        duration: 0.7,
        opacity: 0,
        stagger: 0.2
    }, "all");
    t1.from(".center", {
        y: "1vw",
        duration: 0.5,
        opacity: 0
    });
    t1.from("span", {
        y: "-4vw",
        duration: 1,
        opacity: 0,
    });
    t1.from("#cycle", {
        x: "150%",
        duration: 2
    });
}
start();

gsap.registerPlugin(ScrollTrigger);

gsap.from("#content .div1 video", {
    opacity: 0,
    x: "-50px",
    duration: 2,
    scrollTrigger: {
        trigger: ".div1",
        scroll: "body",
        start: "top 50%",
    }
});
gsap.from("#content .div2", {
    opacity: 0,
    x: "100px",
    duration: 2,
    scrollTrigger: {
        trigger: ".div1",
        scroll: "body",
        start: "top 50%",
    }
});

