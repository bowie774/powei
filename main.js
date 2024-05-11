document,addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".box", {
        x: 1500,
        duration: 8,
        scrollTrigger: {
            trigger: ".box",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "restart none none none",
            markers: true,
            scrub: 2
        }
    })
})