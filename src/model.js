import image from './assets/javascript.png'
import {} from './classes/blocks'

export const model = [
    {type: 'title', value: 'Test title', options: {
        tag: 'h5',
        styles: 'background: darkred; color: #fff; text-align: center;'
    }},
    {type: 'text', value: 'Lorem ipsum dolor sit amet consectetur', options: {
        styles: 'background: yellow; color: #fff;'
    }},
    {type: 'textColums', value: [
        '1 text',
        '2 text',
        '3 text',
        '4 text'
    ], options: {
        styles: 'background: darkred; color: #fff; padding: 1rem;'
    }},
    {type: 'image', value: image, options: {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'myImage',
        imageStyles: 'width: 500px, height: auto;'
    }}
]