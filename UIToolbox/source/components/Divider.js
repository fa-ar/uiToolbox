'use strict'

import { helpers } from '../Core.js'

const Divider = () => {
    const component = helpers.define(
        'hr',
        {
            'data-uitb': 'Divider'
        }
    )

    const createdComponent = helpers.create(component)

    return createdComponent
}

export { Divider }