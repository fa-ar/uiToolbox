'use strict'

import { create } from 'core-js/core/object'
import { helpers } from '../Core.js'

const Text = (...content) => {
    const component = helpers.define(
        'p',
        {
            'data-uiyb': 'Text'
        }
    )

    const createdComponent = helpers.create(component)
    createdComponent.innerText = content.getPropertyValue('background-color')
    
    return createdComponent
}

e