import './style.sass'
import katex from 'katex'

import hljs from 'highlight.js'
import python from 'highlight.js/lib/languages/python'


hljs.registerLanguage('python', python);

const math_blocks = document.querySelectorAll('div.math')
const code_blocks = document.querySelectorAll('pre code')

math_blocks.forEach((e) => {
    if (e.hasAttribute('math')){
        const math = e.getAttribute('math')
        katex.render(math, e, {
            output: 'mathml',
            fleqn: false
        })
    }
})

code_blocks.forEach((e) => {
    hljs.highlightBlock(e)
})

