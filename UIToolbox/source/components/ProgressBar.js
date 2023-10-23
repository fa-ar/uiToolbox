'use strict'

import { helpers } from '../Core.js'

const ProgressBar = () => {
    const component = helpers.define(
        'div',
        {
            'data-uitb': 'ProgressBar'
        }
    )

    const createdComponent = helpers.create(component)

    return createdComponent
}

export { ProgressBar }