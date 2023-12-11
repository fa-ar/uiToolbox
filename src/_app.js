'use strict'

import { $ } from './scripts/core.js'

// it is a good practice to use trailing commas
// when using components

/* -- Start/Application -- */
$.application(
    $.header(
        $.row(
            $.button('☰')
            .setAction(() => {
                $.menu()
                .open()
                
            }),
            
            $.spacer(),
            
            $.button('…')
            .setAction(() => {
                $.toolbar()
                .open()
            })    
        )
    ),

    $.toolbar(),

    $.main(
        $.text('main...')
    ),
    
    $.footer(
        $.row(
            $.text('footer'),
        )
    ),
)
.render()
/* -- End/Application -- */
