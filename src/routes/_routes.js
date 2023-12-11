'use strict'

import { notFound } from './notFound.js'
import { home } from './home.js'
import { preferences } from './preferences.js'

const routes = {
    'notFound': notFound,
    '#/': home,
    '#/preferences': preferences,
}

export { routes }