import {model} from './model'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import './styles/main.css'


const site = new Site('#site')

new Sidebar('#panel')

site.render(model)

// model.forEach(block => {
//     site.insertAdjacentHTML('beforeend', block.toHTML())
    // const generate = templates[block.type]
    // if (generate) {
    //     const html = generate(block)
    //     site.insertAdjacentHTML('beforeend', html)
    // }
    // if (block.type === 'title') {
    //     html = title(block)
    // } else if (block.type === 'text') {
    //     html = text(block)
    // } else if (block.type === 'textColums') {
    //     html = textColums(block)
    // }
// })
