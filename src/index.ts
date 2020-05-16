import './style.sass'

// Setup search functionality
const search_btn: HTMLSpanElement = document.querySelector('#search_btn')
const search_field: HTMLInputElement = document.querySelector('#search_field')

search_field.classList.add('hide')
search_btn.addEventListener('click', (event) => {
    if (search_field.classList.contains('hide')) {
        search_field.classList.remove('hide')
    } else {
        search_field.classList.add('hide')
    }
    
})

