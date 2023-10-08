'use strict'

import { root, helpers } from '../Core.js'

const Frame = (...content) => {
    const _id = crypto.randomUUID()
    const component = helpers.define(
        'div',
        {
            'id': _id,
            'data-uitb': 'Frame'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)

    helpers.extend(createdComponent, {

        _id: (value) => {
            createdComponent.id = value
            return createdComponent
        },

        backgroundColor: (value) => {
            createdComponent.style.backgroundColor = value
            return createdComponent
        },

        width: (value) => {
            createdComponent.style.width = value
            return createdComponent
        },

        height: (value) => {
            createdComponent.style.height = value
            return createdComponent
        },
        padding: (value) => {
            createdComponent.style.padding = value
            return createdComponent
        },

        border: (value) => {
            createdComponent.style.border = value
            return createdComponent
        },

        borderRadius: (value) => {
            createdComponent.style.borderRadius = value
            return createdComponent
        },

        margin: (value) => {
            createdComponent.style.margin = value
            return createdComponent
        },

        top: (value) => {
            createdComponent.style.top = value
            return createdComponent
        },

        bottom: (value) => {
            createdComponent.style.bottom = value
            return createdComponent
        },

        left: (value) => {
            createdComponent.style.left = value
            return createdComponent
        },

        right: (value) => {
            createdComponent.style.right = value
            return createdComponent
        },

        animation: (value) => {
            switch(value) {
                case 'none':
                    createdComponent.removeAttribute('animation')
                    break
                
                case 'fade':
                    createdComponent.style.animation = 'fade-animation var(--speed-xxs) linear'
                    break

                case 'slideTop':
                    createdComponent.style.animation = 'slideTop var(--speed-xxs) linear'
                    break

                case 'slideBottom':
                    createdComponent.style.animation = 'slideBottom var(--speed-xxs) linear'
                    break

                case 'slideLeft':
                    createdComponent.style.animation = 'slideLeft var(--speed-xxs) linear'
                    break
                
                case 'slideRight':
                    createdComponent.style.animation = 'slideRight var(--speed-xxs) linear'
                    break

                default:
                    createdComponent.style.animation = 'slideRight var(--speed-xxs) linear'
                    break
            }

            return createdComponent
        },

        open: () => {
            root.appendChild(createdComponent)
            return createdComponent
        }, 

        close: () => {
            root.removeChild(createdComponent)
            return createdComponent
        }, 

    })
    
    return createdComponent
}

export { Frame }