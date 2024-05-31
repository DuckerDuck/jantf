enum PluginType {
    SEARCH = 'search',
    MATH = 'math',
}

// In order to save bandwidth, we load plugins only when needed
let loaded_plugins: { [index in PluginType]?: boolean } = {}

// Load math plugin when document contains math content
const has_math = document.querySelectorAll('div.math').length > 0
if (has_math) {
    ensure_plugin_loaded(PluginType.MATH)
}

// Setup search trigger
const search_btn = document.getElementById('search_btn')
const search_field = document.getElementById('search_field')
const search_results = document.getElementById('search_result')

async function ensure_plugin_loaded(plugin: PluginType) {
    if (plugin in loaded_plugins) {
        return
    }
    
    let _ = await import(`./plugins/${plugin}`)
    loaded_plugins[plugin] = true
}

if (search_btn != null && search_field != null && search_results != null) {
    search_btn.addEventListener('click', (event) => {
        ensure_plugin_loaded(PluginType.SEARCH)

        if (search_field.classList.contains('hide')) {
            search_field.classList.remove('hide')
            search_field.focus()
        } else {
            search_field.classList.add('hide')
            search_results.innerHTML = ''
        }
    })
}