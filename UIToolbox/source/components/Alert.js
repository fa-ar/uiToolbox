'use strict'

import { helpers } from '../Core.js'

const Alert = (title, content, ) => {
    const component = helpers.define(
        'div',
        {
            'data-uitb': 'Alert'
        }
    )

    const createdComponent = helpers.create(component)
    
    return createdComponent
}

export { Alert }