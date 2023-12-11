'use strict'

import { $ } from '../scripts/core.js'

const preferences = () => {
    $.area(
        $.toolbar()
        .setContent(),
        
        $.scroll(
            $.column(
                
            ),
        ),
    )
}

export { preferences }