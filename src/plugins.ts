import './plugins.sass'
import katex from 'katex'
import Fuse from 'fuse.js'

const math_blocks = document.querySelectorAll('div.math')
const fuse_options = {
    includeScore: true,
    keys: ['categories', 'tags', 'title']
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
        console.log(results)
    })
}