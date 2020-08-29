import {col, row} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {tag,styles} = this.options
        return row(col(`
                <${tag}>${this.value}</${tag}>
        `), styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {alt, styles, imageStyles} = this.options
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}" />`
        return row(html, styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        return row(col(`
        <p>${this.value}</p>
        `), this.options.styles)
    }
}

export class TextColumsBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const html = this.value.map(item => col(item))
        return row(html.join(''), this.options.styles)
    }
}

//Здесь добавляются новые блоки, что бы добавить новый блок, 
//нужно повторить структуру и написать новый toHTML и так же описать ее в model.js,
// следует добавить новые блоки
//например текст и картинку, кнопки или другие элементы
