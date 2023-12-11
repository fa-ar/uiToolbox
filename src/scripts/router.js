'use strict'

/* -- Start/Import -- */
import { routes } from '../routes/_routes.js'
/* -- End/Import -- */

/* -- Start/Router -- */
// start
const setBaseHashUrl = () => {
    window.history.pushState({}, '', '#/')
}
// end

// start
const checkUrlHash = () => {
    if (location.hash in routes) {
        document.querySelector('[data-id="main"]').innerHTML = ''
        document.querySelector('[data-id="main"]').append(routes[location.hash]())
    }

    else {
        document.querySelector('[data-id="main"]').innerHTML = ''
        document.querySelector('[data-id="main"]').append(routes.notFound())    
    }
}
// end
/* -- End/Router -- */

/* -- Strat/Exports -- */
export { setBaseHashUrl, checkUrlHash }
/* -- End/Exports -- */
