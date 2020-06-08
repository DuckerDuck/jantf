import './style.sass'

// Setup search functionality
const search_btn: HTMLSpanElement = document.querySelector('#search_btn')
const search_field: HTMLInputElement = document.querySelector('#search_field')
const search_results: HTMLDivElement = document.querySelector('#search_result')

search_btn.addEventListener('click', (event) => {
    if (search_field.classList.contains('hide')) {
        search_field.classList.remove('hide')
        search_field.focus()
    } else {
        search_field.classList.add('hide')
        search_results.innerHTML = ''
    }
})
