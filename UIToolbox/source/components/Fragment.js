'use strict'

const Fragment = (...content) => {
    const fragment = document.createDocumentFragment()
    fragment.append(...content)

    return fragment
}

export { Fragment }