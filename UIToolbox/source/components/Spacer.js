'use strict'

import { helpers } from '../Core.js'

const Spacer = () => {
    const component = helpers.define(
        'span',
        {
            'data-uitb': 'Spacer'
        }
    )

    const createdComponent = helpers.create(component)
    return createdComponent
}

export { Spacer }