'use strict'

import { helpers } from '../Core.js'

const UserInterface = (...content) => {
    const component = helpers.define(
        'div',
        {
            'id': 'UserInterface',
            'data-uitb': 'UserInterface'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)

    helpers.extend(createdComponent, {
        backgroundColor: (value) => {
            createdComponent.style.backgroundColor = value
            return createdComponent
        },
    })

    return createdComponent
}

export { UserInterface }