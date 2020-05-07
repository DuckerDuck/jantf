import './style.sass'
import katex from 'katex'

const a: string = 'Hello World!'
console.log(a)


const math_blocks = document.querySelectorAll('div.math')

math_blocks.forEach((e) => {
    if (e.hasAttribute('math')){
        const math = e.getAttribute('math')
        katex.render(math, e, {
            output: 'mathml',
            fleqn: false
        })
    }
})

