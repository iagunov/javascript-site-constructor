import {row, col} from './utils'



function title(block) {
    const {tag,styles} = block.options

    return row(col(`
            <${tag}>${block.value}</${tag}>
    `), styles)
}

function text(block) {
    const {tag,styles} = block.options

    return row(col(`
            <p>${block.value}</p>
    `), styles)
}

function textColums(block) {
    const {tag,styles} = block.options

    const html = block.value.map(item => col(item))
    return row(html.join(''), styles)
}

export const templates = {title,text,textColums}
