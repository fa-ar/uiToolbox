'use strict'

import {  helpers } from '../Core.js'

const SFrame = (...content) => {
    const component = helpers.define(
        'div',
        {
            'data-uitb': 'SFrame'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)

    return createdComponent
}

export { SFrame }