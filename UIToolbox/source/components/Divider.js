'use strict'

import { helpers } from '../Core.js'


// ** TO BE FIXED ** //
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