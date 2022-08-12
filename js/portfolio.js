/*------------ Start Darck Mode ------------*/
// Element
let btnDark = document.querySelector("nav .dark-mode");

// Click btn
btnDark.addEventListener("click", function () {
    btnDark.classList.toggle("active");
    document.body.classList.toggle("dark");
});
/*------------ End Darck Mode ------------*/

/*------------ Start Show lift and right ------------*/
// Element
let showLeft = document.querySelectorAll(".show-left"),
    showOp = document.querySelectorAll(".show-op"),
    showTop = document.querySelectorAll(".show-top"),
    showRight = document.querySelectorAll(".show-right");

//show left
showLeft.forEach(function (e) {
    e.style.transform = "translatex(-150%)";

    window.addEventListener("scroll", function () {
        if (window.scrollY >= e.offsetTop - 600) {
            e.style.transform = "translatex(0)";
        }
    });
});

//show right
showRight.forEach(function (e) {
    e.style.transform = "translatex(150%)";

    window.addEventListener("scroll", function () {
        if (window.scrollY >= e.offsetTop - 600) {
            e.style.transform = "translatex(0)";
        }
    });
});

//show top
showTop.forEach(function (e) {
    e.style.transform = "translatey(150%)";

    window.addEventListener("scroll", function () {
        if (window.scrollY >= e.offsetTop - 600) {
            e.style.transform = "translatey(0)";
        }
    });
});

//show Op
showOp.forEach(function (e) {
    e.style.opacity = "0";

    window.addEventListener("scroll", function () {
        if (window.scrollY >= e.offsetTop - 500) {
            e.style.opacity = "1";
        }
    });
});

/*------------ End Show lift and right ------------*/

/*------------ Start Btn Ub ------------*/
//Element
var btnUp = document.querySelector(".btn-up");

window.addEventListener("scroll", () =>
    window.scrollY >= sections[0].scrollHeight
        ? btnUp.classList.add("show")
        : btnUp.classList.remove("show")
);

btnUp.onclick = () =>
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
/*------------ End Btn Ub ------------*/

/*------------ Start Nav ------------*/
//Element
var lists = document.querySelectorAll("nav .nav-link"),
    navbar = document.querySelector("nav"),
    sections = document.querySelectorAll("section");
//Click list
lists.forEach((e) =>
    e.addEventListener("click", function () {
        lists.forEach((e) => e.classList.remove("active"));
        this.classList.add("active");
    })
);

//The color of the navbar changes when making a scroll and edit Position
window.addEventListener("scroll", () => {
    if (window.scrollY >= sections[0].scrollHeight - navbar.scrollHeight) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});

//Scroll And Active Nav
sections.forEach(function (s) {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= s.offsetTop - navbar.scrollHeight) {
            lists.forEach((n) => {
                if (`#${s.getAttribute("id")}` == n.getAttribute("href")) {
                    lists.forEach((l) => l.classList.remove("active"));
                    n.classList.add("active");
                }
            });
        }
    });
});
/*------------ End Nav ------------*/

/*------------ Start About ------------*/
// Element
var progBar = document.querySelectorAll(".about .prog-bar"),
    sectionSkils = document.querySelector(".about .skils");

//Scroll And Prog Secion
progBar.forEach((e) => (e.style.width = "0"));
window.onscroll = function () {
    if (window.scrollY >= sectionSkils.offsetTop - 500) {
        progBar.forEach((e) => {
            e.style.width = e.dataset.width;
        });
    }
};
/*------------ End About ------------*/

/*------------ Start Service ------------*/
//Element
let sveBoxes = document.querySelectorAll(".service .box");

sveBoxes.forEach(
    (box) =>
        (box.onmouseover = function () {
            //Add Active
            this.classList.add("active");
            //Add Dont-Active
            sveBoxes.forEach((box) =>
                !box.classList.contains("active")
                    ? box.classList.add("show")
                    : ""
            );
            this.onmouseout = function () {
                //Remove Active
                this.classList.remove("active");
                // remove Dont-active
                sveBoxes.forEach((box) => box.classList.remove("show"));
            };
        })
);

/*------------ Start Service ------------*/

/*------------ Start Potfolio ------------*/
let listsWork = document.querySelectorAll(".portfolio ul li"),
    boxes = document.querySelectorAll(".portfolio .all"),
    ourWork = document.querySelector(".our-work");

//Create Event
listsWork.forEach((li) =>
    li.addEventListener("click", function () {
        //Remove Active
        listsWork.forEach((li) => li.classList.remove("active"));
        // // Add Active
        this.classList.add("active");
        // // Remove Imgs
        boxes.forEach((box) => (box.parentElement.style.display = "none"));
        // // Add Imgs
        document
            .querySelectorAll(this.getAttribute("data-work"))
            .forEach((box) => (box.parentElement.style.display = "block"));
    })
);
/*------------ End Potfolio ------------*/
