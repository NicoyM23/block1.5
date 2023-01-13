const sliderItems = document.querySelectorAll('.hidden')
const button = document.querySelector('.slider__show-all')
console.log(button.style)
button.addEventListener('click',() => {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.toggle('hidden')
    }
    button.classList.toggle('click')
    button.textContent = button.textContent === 'Показать всё' ? 'Скрыть' : 'Показать всё';
})
const swiper = document.querySelector('.slider__items')
const pagination = document.querySelector('.pagination')
const swiperSliders = document.querySelectorAll('.slider__item')
const initSwiper = () => {
    const fragment = document.createDocumentFragment()
    let xCord = 0
    let end = true
    for (let i = 0; i < swiperSliders.length; i++) {
        const dot = document.createElement('div')
        dot.className = 'dot'
        dot.addEventListener("click", () =>{
            console.log(end)
            if (!end) {
                return
            }
            end = false
            const start = Date.now()
            let distance = (272*i-xCord)/25
            const timer = setInterval(() => {
                const time = Date.now() - start
                if (time >= 500) {
                    clearInterval(timer)
                    end = true
                }
                xCord += distance
                if (xCord < 0) {
                    xCord = 0
                }
                swiper.style.transform = `translateX(${-xCord}px)`
            },20)
        })
        fragment.append(dot)
    }
    pagination.append(fragment)
}
initSwiper()