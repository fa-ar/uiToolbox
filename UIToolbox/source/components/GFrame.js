'use strict'

import { helpers } from '../Core.js'
import { Button } from './Button.js'

const GFrame = (...content) => {
    const _id = crypto.randomUUID()
    const component = helpers.define(
        'div',
        {
            'id': _id,
            'data-uitb': 'GFrame'
        }
    )

    const componentTopBar = helpers.define(
        'div',
        {
            'data-uitb': 'GFrameTopBar'
        }
    )

    const createdComponentTopBar = helpers.create(componentTopBar)
    const createdComponent = helpers.create(component)
    
    createdComponentTopBar.prepend(Button('✕', () => { 
        document.getElementById(_id).style.opacity = 0
        document.getElementById(_id).style.transform = 'scaleY(-0.8)'

        setTimeout(() => { 
                document.getElementById(_id).remove() 
            }, 100)
        }).styleType('borderless')
    )
    
    createdComponent.prepend(createdComponentTopBar)
    createdComponent.append(...content)

    helpers.extend(createdComponent, {
        
        backgroundColor: (value) => {
            createdComponent.style.backgroundColor = value
            return createdComponent
        },

        padding: (value) => {
            createdComponent.style.padding = value
            return createdComponent
        },

        margin: (value) => {
            createdComponent.style.margin = value
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
            document.getElementById('UserInterface').appendChild(createdComponent)
            return createdComponent
        }
    })

    return createdComponent
}

export { GFrame }
