let projects = document.querySelector(".new-projects .projects");
let project = document.querySelector(".new-projects .projects .project");
let rightSwiperBtn = document.querySelector(".new-projects .control-swiper .right");
let leftSwiperBtn = document.querySelector(".new-projects .control-swiper .left");

rightSwiperBtn.addEventListener("click", () => {
    projects.scrollLeft += project.clientWidth;
});

leftSwiperBtn.addEventListener("click", () => {
    projects.scrollLeft += -project.clientWidth;
});