import './style.sass'

// Setup search functionality
const search_btn = document.getElementById('search_btn')
const search_field = document.getElementById('search_field')
const search_results = document.getElementById('search_result')

if (search_btn != null && search_field != null && search_results != null) {
    search_btn.addEventListener('click', (event) => {
        if (search_field.classList.contains('hide')) {
            search_field.classList.remove('hide')
            search_field.focus()
        } else {
            search_field.classList.add('hide')
            search_results.innerHTML = ''
        }
    })
}
