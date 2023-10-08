'use strict'

import { components, helpers } from './Core.js'

const ui = (component, ...content) => {
    switch(component) {
        
        case 'Render':
            return helpers.render(...content) 

        case 'Fragment':
            return components.Fragment(...content)

        case 'UserInterface':
            return components.UserInterface(...content)

        case 'Frame':
            return  components.Frame(...content)

        case 'GFrame':
            return components.GFrame(...content)

        case 'XFrame':
            return components.XFrame(...content)

        case 'YFrame':
            return components.YFrame(...content)

        case 'SFrame':
            return components.SFrame(...content)

        case 'Form':
            return components.Form(...content)

        case 'Button':
            return components.Button(...content)

        case 'Spacer':
            return components.Spacer()

        case 'Divider':
            return components.Divider()

        case 'Widget':
            return components.Widget(...content)

        default:
            return null
    }
}

export { ui }