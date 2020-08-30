import image from './assets/javascript.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumsBlock} from './classes/blocks'
import {css} from './utils'

export const model = [
    new TitleBlock('Test title', {
        tag: 'h5',
        styles: css({
            background: 'darkred',
            color: '#fff',
            'text-align': 'center'
        }),
        // styles: 'background: darkred; color: #fff; text-align: center;'
    } ),
    new TextBlock('Lorem ipsum dolor sit amet consectetur', {
        styles: 'background: yellow; color: #fff;'
    }),
    new TextColumsBlock(['1 text','2 text','3 text'], {
        styles: 'background: darkred; color: #fff; padding: 1rem;'
    }),
    new ImageBlock( image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'myImage',
        imageStyles: 'width: 500px, height: auto;'
    })
]