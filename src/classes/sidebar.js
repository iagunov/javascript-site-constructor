import {TextBlock, TitleBlock, TextColumsBlock} from './blocks'

export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.init()
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock)
        this.$el.innerHTML = this.template
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value


        const Constructor = type === 'text' ? TextBlock : TitleBlock

        const block = new Constructor(value)
        //применить принцип работы с классами
    }
}

//у тайтла есть параметр тег, нужно добавить для него импут.

function block(type) {
    return `
    <form name ="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primapy btn-sm">create</button>
    </form>
    `
}