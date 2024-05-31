// Search all posts client-side using Fuse.js


fetch('/index.json')
    .then(response => response.json())
    .then(data => {
        initSearch(data)
    })

const fuse_options = {
    includeScore: true,
    keys: ['categories', 'tags', 'title', 'summary']
}


async function initSearch(index: any) {
    const { default: Fuse } = await import('fuse.js')
    const fuse = new Fuse(index, fuse_options)

    const search_field = document.getElementById('search_field') as HTMLInputElement
    if (search_field === null) {
        console.log("No search button found :/")
        return
    }

    search_field.addEventListener('keyup', event => {
        const results = fuse.search(search_field.value)
        render_results(results)
    })
}

function render_results(results: any) {
    const results_container = document.getElementById('search_result')
    if (results_container == null) {
        console.warn("Could not find container element to render search results.")
        return
    }
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

export default () => {}