'use strict'

import { $ } from '../scripts/core.js'
import { navigateTo } from '../scripts/utils.js'

const home = () => {
    return $.area(
        $.toolbar()
        .setContent(
            $.text('Home toolbar >')
        ),
        
        $.scroll(
            $.column(
                
            ),
        ),
    )
}

export { home }