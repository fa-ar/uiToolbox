'use strict'

const navigateTo = (path) => {
    location.hash = '#/' + path
}

export { navigateTo }