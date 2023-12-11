'use strict'

import { setBaseHashUrl, checkUrlHash } from './router.js'
import { iniStore } from './data.js'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
        
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    setBaseHashUrl()
    checkUrlHash()
    iniStore()
})

window.addEventListener('beforeunload', (event) => {
    event.preventDefault()
})

window.addEventListener('load', (event) => {
    event.preventDefault()
    if (performance.getEntriesByType('navigation')[0] === 'reload') {
        //setBaseHashUrl()
        checkUrlHash()
}
    setBaseHashUrl()
    checkUrlHash()
})

window.addEventListener('popstate', (event) => {
    event.preventDefault()
    checkUrlHash()
})

window.addEventListener('hashchange', (event) => {
    event.preventDefault()
    checkUrlHash()
})

