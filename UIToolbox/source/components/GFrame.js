'use strict'

import { helpers } from '../Core.js'
import { Button } from './Button.js'
import { XFrame } from './XFrame.js'

const GFrame = (...content) => {
    const ID = crypto.randomUUID()
    const component = helpers.define(
        'div',
        {
            'id': ID,
            'data-uitb': 'GFrame'
        }
    )

    const createdComponent = helpers.create(component)

    createdComponent.append(...content)

    helpers.extend(createdComponent, {
        draggable: () => {
            
        }
    })

    return createdComponent
}

export { GFrame }
