document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    gsap.to("#plane", {
        scrollTrigger: {
            trigger: "header",
            start: "top top", 
            end: "bottom center",
            scrub: 5,
            markers: false
        },
        motionPath: {
            path: [
                { x: 0, y: 0 },
                { x: 300, y: -50 },
                { x: 200, y: 50 },
                { x: 200, y: -50 },
                { x: 350, y: 50 },
                { x: 500, y: 150 },
                { x: 1200, y: 200},
                { x: 1200, y: 200}, 
                { x: 1300, y: 300},
                { x: 1500, y: 400}, //first etap end
                // { x: 1300, y: 300},
                // { x: 10000, y: 300},
                // { x: 1000, y: 950},
                // { x: 500, y: 1000},
                // { x: -400, y: 1000}, //second etap end
                // { x: -100, y: 1950},
                // { x: 200, y: 2000},
                // { x: 500, y: 1950},
                // { x: 800, y: 2000},
                // { x: 1200, y: 2050}, //third etap end
                // { x: 1200, y: 3000},
                // { x: 800, y: 3000},
                // { x: 500, y: 2950},
                // { x: 0, y: 3000},
                // { x: -300, y: 3000},
            ],
            curviness: 1.5,
            autoRotate: true
        },
        duration: 240, // Збільшення тривалості для плавного руху
        ease: "power1.inOut",
        onStart: function() {
            // Встановити початкову позицію літачка на край ліворуч
            gsap.set("#plane", { x: 0 });
        }
    });
});



// script.js
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#rotateMe", {
        scrollTrigger: {
            trigger: "body", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        rotation: 1440 // Поворот на 360 градусів
    });
});




gsap.to("#ShesternyaOne", {
    duration: 15,
    ease: "none",
    repeat: -1,
    rotation: 360,
})
gsap.to("#ShesternyaTwo", {
    duration: 12,
    ease: "none",
    repeat: -1,
    rotation: 360,
})
gsap.to("#ShesternyaThree", {
    duration: 9,
    ease: "none",
    repeat: -1,
    rotation: 360,
})
gsap.to("#ShesternyaFour", {
    duration: 6,
    ease: "none",
    repeat: -1,
    rotation: 360,
})
gsap.to("#ShesternyaFive", {
    duration: 3,
    ease: "none",
    repeat: -1,
    rotation: 360,
})
gsap.to("#ShesternyaSix", {
    duration: 1,
    ease: "none",
    repeat: -1,
    rotation: 360,
})



// script.js
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".scroll-content", {
        x: () => -(document.querySelector(".scroll-content").scrollWidth - window.innerWidth) + "px",
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-container",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".scroll-content").scrollWidth
        }
    });
});



function toggleThemeLight() {    
    alert("Нашо ти на мене тикаєш?");
    alert("Жити набридло?");
}
function toggleThemeUkr() {
    alert("https://firecatgamesua.github.io/IvanFrancoUkrLit/");
    alert("Зайшов швидко на цей сайт! Кому сказав!?");
}
function toggleThemeMod() {
    let age = +prompt("Скільки тобі рочків?", '');
    if(age >= 18 && age < 100){
        alert("Іди на задод пахати");
    } else if(age >= 100){
        alert("Ти чому ще не на тому світі?");
    } else if(age < 0){
        alert("А нічого, що ти ще не народився?");
    }
    else{
        alert("Ти чого не в садочку?");
    }
}



gsap.to("#path", {
    duration: 10,
    stroke: "black",
    ease: "none",
    repeat: -1,
    yoyo: true
});
gsap.to(".tone", {
    duration: 10,
    ease: "none",
    repeat: -1,
    x: -800,
})
gsap.to(".ttwo", {
    duration: 10,
    ease: "none",
    repeat: -1,
    x: 800,
})