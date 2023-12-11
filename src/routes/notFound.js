'use strict'

import { $ } from '../scripts/core.js'

const notFound = () => {
    return $.area( 
        $.toolbar()
        .setContent(),
         
        $.text('Not Found')
    )
}

export { notFound }
