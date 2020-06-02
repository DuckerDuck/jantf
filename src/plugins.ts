import './plugins.sass'
import katex from 'katex'
import Fuse from 'fuse.js'

const math_blocks = document.querySelectorAll('div.math')
const fuse_options = {
    includeScore: true,
    keys: ['categories', 'tags', 'title', 'summary']
}

math_blocks.forEach((e) => {
    if (e.hasAttribute('math')){
        const math = e.getAttribute('math')
        katex.render(math, e, {
            fleqn: false
        })
    }
})

// Search
fetch('/index.json')
.then(response => response.json())
.then(data => {
    initSearch(data)
})

function initSearch(index) {
    const fuse = new Fuse(index, fuse_options)
    const search_field = document.getElementById('search_field') as HTMLInputElement

    search_field.addEventListener('keyup', event => {
        const results = fuse.search(search_field.value)
        render_results(results)
    })
}

function render_results(results) {
    const results_container = document.getElementById('search_result')
    results_container.innerHTML = ''
    
    for (let result of results) {
        const container = document.createElement('div')
        container.classList.add('search-result-item')

        const a = document.createElement('a')
        a.innerText = result.item.title
        a.href = result.item.uri

        const span = document.createElement('span')
        span.innerText = result.item.date.split('T')[0]

        container.appendChild(a)
        container.appendChild(span)

        results_container.appendChild(container)
    }
}