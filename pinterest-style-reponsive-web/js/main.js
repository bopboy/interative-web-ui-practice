const frame = "section"
const box = "article"
const speed = "0.5s"
const activeClass = "on"
const btns = document.querySelectorAll("main ul li")
let grid

const init = () => {
    grid = new Isotope("section", {
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: "0.5s"
    })
}
const filter = arr => {
    for (let el of arr) {
        el.addEventListener("click", e => {
            e.preventDefault()
            const sort = e.currentTarget.querySelector("a").getAttribute("href")
            grid.arrange({ filter: sort })
            for (let el of btns) {
                el.classList.remove("on")
            }
            e.currentTarget.classList.add("on")
        })
    }
}
window.addEventListener("load", () => {
    init()
    filter(btns)
})