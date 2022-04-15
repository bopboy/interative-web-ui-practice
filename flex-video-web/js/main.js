const circle = document.querySelector('#circle')
const article = circle.querySelectorAll('article')
for (let e of article) {
    e.addEventListener('mouseenter', e => {
        circle.style.animationPlayState = "paused"
    })
    e.addEventListener('mouseleave', e => {
        circle.style.animationPlayState = "running"
    })
}