// For social media and contact in media (max-width 992px)
const round = document.querySelector(".round")
const info = document.querySelector(".info")
round.addEventListener("click", (eo) => {
    info.classList.toggle("active-social")
})
// For Nav Bar in media Max-width 992px
const bar = document.getElementById("bar")
const item = document.querySelector(".item")
console.log(item);
bar.addEventListener("click", (eo) => {
    item.classList.toggle("active-nav")
})