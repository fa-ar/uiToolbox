'use strict'

import { helpers } from '../Core.js'

const Button = (label, action) => {
    const component = helpers.define(
        'button',
        {
            'data-uitb': 'Button'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.innerText = label
    createdComponent.onclick = action

    helpers.extend(createdComponent, {
        _id: (value) => {
            createdComponent.id = value
            return createdComponent
        },

        styleType: (type) => {
            switch (type) {
                case 'plain':
                    createdComponent.style.backgroundColor = 'transparent'
                    createdComponent.style.color = 'var(--color-green-75)'
                    createdComponent.style.borderStyle = 'hidden'
                    break

                case 'borderless':
                    createdComponent.style.borderStyle = 'hidden'
                    break

                case 'borderless.prominent':
                    createdComponent.style.color = 'var(--color-green-75)'
                    createdComponent.style.borderStyle = 'hidden'
                    break

                case 'prominent':
                    createdComponent.style.color = 'var(--color-green-75)'
                    createdComponent.style.borderColor = 'var(--color-green-75)'
                    break 

                case 'tinted':
                    createdComponent.style.backgroundColor = 'var(--color-green-100)'
                    createdComponent.style.color = 'var(--color-green-50)'
                    createdComponent.style.borderStyle = 'solid'
                    createdComponent.style.borderColor = 'var(--color-green-100)'
                    break 

                case 'filled':
                    createdComponent.style.backgroundColor = 'var(--color-green-75)'
                    createdComponent.style.color = 'var(--color-white)'
                    createdComponent.style.borderStyle = 'solid'
                    createdComponent.style.borderColor = 'var(--color-green-75)'
                    break
            
                default:
                    return createdComponent
            }

            return createdComponent
        },

        pill: () => {
            createdComponent.style.borderRadius = '35px'
            return createdComponent
        },

        close: () => {
            console.log(createdComponent.parentElement)
            return createdComponent
        }
    })

    return createdComponent
}

export { Button }