// Render any div.math element as math using KaTeX

import './math.sass'

renderMath()

async function renderMath() {
    const math_blocks = document.querySelectorAll('div.math') as NodeListOf<HTMLElement>

    if (math_blocks.length > 0) {
        const katex = await import('katex')

        math_blocks.forEach((e) => {
            if (e.hasAttribute('math')) {
                const math = e.getAttribute('math')
                if (math != null) {
                    katex.render(math, e, {
                        fleqn: false
                    })
                }
            }
        })
    } else {
        console.warn('No math blocks found')
    }
}

export default () => {}