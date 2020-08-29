import {model} from './model'
import {templates} from './templates'
import './styles/main.css'

const site = document.querySelector('#site')

model.forEach(block => {
    const generate = templates[block.type]
    if (generate) {
        const html = generate(block)
        site.insertAdjacentHTML('beforeend', html)
    }
    // if (block.type === 'title') {
    //     html = title(block)
    // } else if (block.type === 'text') {
    //     html = text(block)
    // } else if (block.type === 'textColums') {
    //     html = textColums(block)
    // }
})
