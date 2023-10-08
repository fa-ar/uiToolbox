'use strict'

import { helpers } from '../Core.js'

const Toolbar = (...content) => {
    const component = helpers.define(
        'div',
        {
            'data-uitb': 'Toolbar'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.append(...content)
    

    return createdComponent
}

export { Toolbar }