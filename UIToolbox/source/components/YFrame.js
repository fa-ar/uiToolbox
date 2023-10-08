'use strict'

import { helpers } from '../Core.js'

const YFrame = (...content) => {
    const component = helpers.define(
        'div',
        {
            'data-uitb': 'YFrame'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)

    return createdComponent
}

export { YFrame }