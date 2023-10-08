'use strict'

import { helpers } from '../Core.js'

const XFrame= (...content) => {
    const component = helpers.define(
        'div',
        {
            'data-uitb': 'XFrame'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)
    
    return createdComponent
}

export { XFrame }