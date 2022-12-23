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
