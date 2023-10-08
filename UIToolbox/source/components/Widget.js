'use strict'

import { helpers } from '../Core.js'

const Widget = (...content) => {
    const component = helpers.define(
        'div',
        {
            'data-uitb': 'Widget'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)

    return createdComponent
}

export { Widget }