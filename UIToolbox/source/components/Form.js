'use strict'

import { helpers } from '../Core.js'

const Form = (...content) => {
    const component = helpers.define(
        'form',
        {
            'data-uitb': 'Form'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)

    return createdComponent
}

export { Form }