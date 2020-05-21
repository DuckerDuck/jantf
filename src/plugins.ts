import './plugins.sass'
import katex from 'katex'

const math_blocks = document.querySelectorAll('div.math')

math_blocks.forEach((e) => {
    if (e.hasAttribute('math')){
        const math = e.getAttribute('math')
        katex.render(math, e, {
            fleqn: false
        })
    }
})

