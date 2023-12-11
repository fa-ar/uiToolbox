'use strict'

/* -- Start/Imports -- */
/* -- End/Imports -- */

/* -- Start/Core -- */
// start
const root = document.querySelector('body')
root.id = 'root'
// end

// start setElement function
// creates a base html element
const setElement = (tag) => {
    const element = document.createElement(tag)

    return element
}
// end setElement

// start setStyles
// sets the css styles to an html element
const setStyles = (element, styles) => {
    for (const style in styles) {
        element.style[style] = styles[style]
    }

    return element
}
// end setStyle

// start setAttribute
// sets the attributes to an html element
const setAttributes = (element, attributes) => {
    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute])
    }

    return element
}
// end setAttributes

// start setMethods
// sets the methods to an html element
const setMethods = (element, methods) => {
    for (const method in methods) {
        element[method] = methods[method]
    }

    return element
}
// end setMethods

// start setComponent
// creates a new ui component with its respectivve
// styles, attrinutes and methods
const setComponent = (tag, styles, attributes, methods) => {
    const element = setElement(tag)
    if (element, styles) {
        setStyles(element, styles)
    }

    if (element, attributes) {
        setAttributes(element, attributes)
    }

    if (element, methods) {
        setMethods(element, methods)
    }

    return element
}
// end
/* -- End/Core -- */

/* -- Start/Components -- */
// start
const fragment = () => {
    const f = document.createDocumentFragment()
    return f
}
// end

// start
const c = (...content) => {
    const component = setComponent(
        'section',
        // styles
        {},
        // attributes
        {},
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end

// start application
const application = (...content) => {
    const component = setComponent(
        'section',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'padding': '0%',
            'margin': '0%',
            'border': 'none',
            'min-width': '375px',
            'width': '100vw',
            'min-height': '100vh',
            'height': '100vh',
            'overflow': 'hidden',
            'z-index': '0'

        },
        // attributes
        {
            'data-id': 'application',
        },
        // methods
        {
            render: function () {
                root.append(this)
                return root
            },
        },
    )
    component.append(...content)
    return component
}
// end application

// start page
const page = (...content) => {
    const component = setComponent(
        'section',
        // styles
        {},
        // attributes
        {
            'data-id': 'page',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end page

// start header
const header = (...content) => {
    const component = setComponent(
        'header',
        // styles
        {
            'position': 'sticky',
            'display': 'flex',
            'top': '0',
            'background-color': 'inherit',
            'width': 'var(--size-inf)',
            'min-height': '34px',
            'height': 'fit-content',
            'padding': '0%',
            'align-items': 'center',
            'z-index': '2',
        },
        // attributes
        {
            'data-id': 'header',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end header

// start main
const main = (...content) => {
    const component = setComponent(
        'main',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex': '1',
            'flex-direction': 'column',
            'background-color': 'inherit',
            'width': '100%',
            'overflow': 'hidden'
        },
        // attributes
        {
            'data-id': 'main',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end main

// start footer
const footer = (...content) => {
    const component = setComponent(
        'footer',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'width': 'var(--size-inf)',
            'height': '34px',
            'margin-top': 'auto',
            'bottom': '0px',
            'align-items': 'center',
        },
        // attributes
        {
            'data-id': 'footer',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end footer

// start aside
const aside = (...content) => {
    const component = setComponent(
        'aside',
        // styles
        {},
        // attribtues
        {
            'data-id': 'aside',
        },
        // methods
        {}
    )
    component.append(...content)
    return component
}
// end aside

// start toolbar
const toolbar = () => {
    const component = setComponent(
        'div',
        // styles
        {
            'position': 'sticky',
            'display': 'none',
            'flex-direction': 'row',
            'top': '0',
            'background-color': 'inherit',
            'width': 'var(--size-inf)',
            'min-height': '34px',
            'height': 'fit-content',
            'padding': '0%',
            'align-items': 'center',
            'overflow-x': 'auto',
            'z-index': '1',
        },
        // attributes
        {
            'data-id': 'toolbar',
        },
        // methods
        {
            open: function () {
                const t = document.querySelector('[data-id="toolbar"]')
                if (t.style.display === 'none') {
                    t.style.display = 'flex'
                }
                else {
                    t.style.display = 'none'
                }
            },
            
            setContent: function (...content) {
                document.querySelector('[data-id="toolbar"]').innerHTML = ''
                document.querySelector('[data-id="toolbar"]').append(...content)
                return this
            },
        },
    )
    return component
}
// end toolbar

// start section
const section = (...content) => {
    const component = setComponent(
        'section',
        // styles
        {},
        // attributes
        {
            'data-id': 'section',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end section

// start area
const area = (...content) => {
    const component = setComponent(
        'div',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'flex-wrap': 'wrap',
            'max-width': '100%',
            'width': 'auto',
            'height': 'fit-content',
            'min-height': '34px',
            'padding': 'var(--default-padding) 0px',
            'margin': 'var(--default-margin) 0px',
            'border': 'none',
            'border-radius': 'none',
        },
        // attributes
        {
            'data-id': 'area',
        },
        // methods
        {
            setWidth: function (value) {
                this.style.width = value
                return this 
            },

            setHeight: function (value) {
                this.style.height = value
                return this 
            },

            setPadding: function (value = null) {
                this.style.padding = value
                return this
            },

            justifyContent: function (value = 'center') {
                this.style.justifyContent = value
                return this
            },

            alignItems: function (value = 'center') {
                this.style.alignItems = value
                return this
            },

            setBorder: function (value) {
                this.style.border = value
                return this
            },
        },
    )
    component.append(...content)
    return component
}
// end area

// start row
const row = (...content) => {
    const component = setComponent(
        'div',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'row',
            'width': 'var(--size-inf)',
            'height': 'auto',
            'padding': '0%',
            'margin': '0%',
            'align-items': 'center',
            'border': '0%',
            'border-radius': 'none',
            'z-index': '1',
        },
        // attributes
        {
            'data-id': 'row',
        },
        // methods
        {
            alignItems: function (value = 'center') {
                this.style.alignItems = value
                return this
            },
        }
    )
    component.append(...content)
    return component
}
// end row

// start column
const column = (...content) => {
    const component = setComponent(
        'div',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'width': 'var(--size-inf)',
            'height': 'var(--size-inf)',
            'padding': '0%',
            'margin': '0%',
            'border': '0%',
            'border-radius': 'none',
            'z-index': '1',
        },
        // attributes
        {
            'data-id': 'column',
        },
        // methods
        {
            justifyContent: function (value = 'center') {
                this.style.justifyContent = value
                return this
            },

            alignItems: function (value = 'center') {
                this.style.alignItems = value
                return this
            },
        },
    )
    component.append(...content)
    return component
}
// end column

// start scroll
const scroll = (...content) => {
    const component = setComponent(
        'div',
        // styles
        {
            'position': 'relative',
            'display': 'inline-flex',
            'flex-direction': 'column',
            'width': '100%',
            'min-height': '1px',
            'padding': '0%',
            'margin': '0%',
            'border': 'none',
            'border-radius': '0%',
            'pointer-events': 'auto',
            'cursor': 'auto',    
            'overflow-x': 'hidden',
            'overflow-y': 'scroll',
        },
        // attributes
        {
            'data-id': 'scroll',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end scroll

// start form
const form = (...content) => {
    const component = setComponent(
        'form',
        // style
        {},
        // attributes
        {
            'data-id': 'form',
        },
        // methods
        {
            height: function (value) {
                this.style.height = value
                return this
            },
        }
    )
    component.append(...content)
    return component
}
// end form

// start input
const input = (placeholder) => {
    const component = setComponent(
        'input',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex': '1',
            'min-width': '20ch',
            'max-width': '626.667px',
            'padding': 'var(--default-padding) 0px',
            'margin': 'var(--default-margin) 0px',
            'border': 'none',
            'outline': 'none',
        },
        // attributes
        {
            'data-id': 'input',
            'type': '',
            'name': '',
        },
        // methods
        {
            _id: function (value) {
                this.id = value
                return this
            },

            setInputName: function (value) {
                this.name = value || ''
                return this
            },

            setInputType: function (value) {
                this.type = value || ''
                return this
            },

            setWidth: function (value) {
                this.style.width = value
                return this
            },

        }
    )
    component.placeholder = placeholder || 'Placeholder text...'

    return component
}
// end input

// start label
const label = (...content) => {
    const component = setComponent(
        'label',
        // styles
        {
            'width': 'auto',
            'height': 'auto',
        },
        // attributes
        {
            'data-id': 'label',
            'for': ''
        },
        // methods
        {
            for: function (value) {
                this.setAttribute('for', value)
                return this
            },

            setWidth: function (value) {
                this.style.width = value
                return this
            },

            setHeight: function (value) {
                this.style.height = value
                return this
            },
        }
    )
    component.append(...content)
    return component
}
// end label

// start details
const details = (label) => {
    const _summary = setComponent(
        'summary',
        // styles
        {},
        // attributes
        {
            'data-id': 'details-summary'
        },
        // methods
        {}
    )
    _summary.innerText = label

    const _content = setComponent(
        'div',
        // styles
        {
            'width': 'fit-content',
            'height': 'fit-content',
            'padding': 'var(--default-padding)',
            'margin': 'var(--default-margin)', 
        },
        // attributes
        {
            'data-id': 'details-content'
        },
        // methods
        {}
    )

    const component = setComponent(
        'details',
        // styles
        {
            'width': 'fit-content',
            'height': 'fit-content',
            'padding': 'var(--default-padding)',
            'margin': 'var(--default-margin)',
        },
        // attributes
        {
            'data-id': 'details'
        },
        // methods
        {
            setContent: function (...content) {
                _content.append(...content)
                return this
            }
        }
    )
    component.append(_summary, _content)
    return component

}
// end details

// start spacer
const spacer = () => {
    const component = setComponent(
        'span',
        // styles
        {
            'display': 'flex',
            'flex': '1',
        },
        // attributes
        {
            'data-id': 'spacer',
        },
        // methods
        {}
    )
    return component
}
// end spacer

// start divider
const divider = () => {
    const component = setComponent(
        'hr',
        // styles
        {
            'display': 'block',
            'width': 'var(--size-inf)',
        },
        // attributes
        {
            'data-id': 'divider',
        },
        // methods
        {}
    )
    return component
}
// end divider

// start link
const link = (label) => {
    const component = setComponent(
        'a',
        // styles
        {},
        // attributes
        {
            'data-id': 'link',
            'href': 'javascript:void(0)'
        },
        // methods
        {
            to: function (url) {
                this.href = url || 'javascript:void(0)'
                return this
            },
        },
    )
    component.innerText = label

    return component
}
// end link

// start button
const button = (label) => {
    const component = setComponent(
        'button',
        // styles
        {
            'position': 'relative',
            'display': 'inline-flex',
            'flex-direction': 'column',
            'width': '44px',
            'min-width': 'fit-content',
            'height': 'auto',
            'min-height': '22px',
            'justify-content': 'center',
            'white-spce': 'no-wrap',
            'padding': 'var(--size-n)',
            'margin':  'var(--size-n)',
            'border': 'none',
            'border-radius': '0%',
            'pointer-events': 'auto',
            'cursor': 'pointer',    
            'z-index': '1',
        },
        // attributes
        {
            'data-id': 'button',
        },
        // methods
        {
            setAction: function (fn) {
                this.onclick = fn
                return this
            },

        }
    )
    component.innerText = label || 'Placeholder'
    return component
}
// end button

// start list
const list = (...content) => {
    const component = setComponent(
        'ol',
        // styles
        {
            'display': 'flex',
            'flex-direction': 'column',
            'list-style-type': 'none',
            'padding': 'var(--default-padding) 0px',
            'padding-left': '0px',
            'margin': 'var(--default-margin) 0'
        },
        // attributes
        {
            'data-id': 'list'
        },
        // methods
        {
            setListType: function (value) {
                switch (value) {
                    case '':
                        break

                    default:
                        break
                }
            },
        },
    )
    component.append(...content)

    return component
}
// end list

// start listItem
const listItem = (...content) => {
    const component = setComponent(
        'li',
        // styles
        {
            'padding': 'var(--default-padding)',
            'margin': 'var(--default-margin)',
            'list-style-position': 'outside',
        },
        // attributes
        {
            'data-id': 'listItem'
        },
        // methods
        {},
    )
    component.append(...content)

    return component
}
// end listItem

// start text
const text = (...content) => {
    const component = setComponent(
        'p',
        // styles
        {
            'position': 'relative',
            'display': 'block',
            'text-align': 'justify',
            'min-width': 'fit-content',
            'width': 'fit-content',
            'max-width': '80ch',
            'height': 'fit-content',
            'hyphens': 'auto',
            'padding': 'var(--default-padding)',
            'margin': 'var(--default-margin)',
        },
        // attributes
        {
            'data-id': 'text',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end text

// start textarea
const textarea = (...content) => {
    const component = setComponent(
        'textarea',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex': '1',
            'min-width': '20ch',
            'max-width': '80ch',
            'min-height': '300px',
            'padding': 'var(--default-padding) 0px',
            'margin': 'var(--default-margin) 0px',
            'border': 'none',
            'outline': 'none',
        },
        // attributes
        {
            'data-id': 'textarea',
            'placeholder': 'Placeholder...'
        },
        // methods
        {
            _id: function (value) {
                this.id = value
                return value
            },

            setTextareaName: function (value) {
                this.name = value
                return this
            },

            setPlaceholderText: function (value) {
                this.setAttribute('placeholder', value)
                return this
            },

            setWidth: function (value) {
                this.style.width = value
                return this
            },

            setHeight: function (value) {
                this.style.height = value
                return this
            },

            resize: function (value) {
                this.style.resize = value


                return this
            },

            spellCheck: function (value = false) {
                this.setAttribute('spellcheck', value)
                return this
            },


        },
    )
    component.value = content
    return component
}
// end textarea

// start menu
const menu = (...content) => {
    const ID = crypto.randomUUID()
    const component = setComponent(
        'menu',
        // styles
        {
            'position': 'absolute',
            'display': 'flex',
            'flex-direction': 'column',
            'width': '300px',
            'height': '100%',
            'background-color': 'gainsboro',
            'padding': '0',
            'margin': '0',
            'z-index': '1',
        },
        // attributes
        {
            'data-id': 'menu',
            'id': ID,
        },
        // methods
        {
            _id: function (value) {
                this.id = value
                return this
            },

            open: function () {
                document.querySelector('[data-id="application"]').setAttribute('inert', '')
                root.prepend(this)
                return this
            },
        },
    )
    component.prepend(
        row(
            button('✕')
            .setAction(
                () => {
                    document.querySelector('[data-id="application"]').removeAttribute('inert')
                    document.getElementById(ID).remove()
                    return this
                }
            ),
            spacer(),
            button('⚙'),
        )
    )
    component.append(...content)
    return component
}
// end menu

// start menuItem
const menuItem = (...content) => {
    const component = setComponent(
        'li',
        // styles
        {
            'padding': 'var(--default-padding)',
            'margin': 'var(--default-margin)',
            'list-style-position': 'outside',
        },
        // attributes
        {
            'data-id': 'menuItem',
        },
        // methods
        {},
    )
    component.append(...content)
    return component
}
// end menuItem

// start editor
const editor = (...content) => {
    const _textarea = setComponent(
        'textarea',
        // styles
        {
            'position': 'absolute',
            'display': 'flex',
            'flex': '1',
            'width': '100%',
            'height': '100%',
            'min-height': '300px',
            'padding': '0px',
            'margin': '0px',
            'border': 'none',
            'outline': 'none',
            'line-height': '2',
            'overscroll-behavior': 'none',
            'top': '0',
            'left': '0',
            'resize': 'none',
            'background-color': 'transparent',
        },
        // attributes
        {
            'placeholder': 'Start here...'
        },
        // methods
        {}
    )

    const _highlights = setComponent(
        'pre',
        // styles
        {
            'position': 'absolute',
            'display': 'flex',
            'flex': '1',
            'flex-direction': 'column',
            'width': '100%',
            'height': '100%',
            'padding': '0px',
            'margin': '0px',
            'border': 'none',
            'outline': 'none',
            'font-family': 'monospace',
            'white-space': 'pre-wrap',
            'line-height': '2',
            'overscroll-behavior': 'none',
            'overflow': 'hidden',
            //'overflow-y': 'auto',
            'top': '0',
            'left': '0',
            'pointer-events': 'none',
            'color': 'red',
            'background-color': 'transparent',
        },
        // attributes
        {
            'data-id': 'editorHighlights'
        },
        // methods
        {
            apply: function () {
                let content = _textarea.value
                .replace(/(?<=^|\s)(hi)(?=\s|$)/img, '<u class="editorItem hi">$1</u>')
                .replace(/^(.*)/img, '<p class="editorItem x">$1</p>')
                _highlights.innerHTML = content
                console.log(_highlights.innerHTML)
            },

            purge: function () {
                let content = _highlights.innerHTML
                .replace(/<.*>()<\/.*>/img, '')
                _highlights.innerHTML = content
            },
        }
    )

    _textarea.addEventListener('input', () => {
        _highlights.apply()
        //_highlights.purge()
        //_highlights.innerHTML = _textarea.value
    })

    _textarea.addEventListener('scroll', () => {
        _highlights.scrollTop = _textarea.scrollTop
    })
    
    const component = setComponent(
        'div',
        // styles
        {
            'position': 'relative',
            'display': 'flex',
            'flex': '1',
            'min-width': '100%',
            'max-width': '80ch',
            'min-height': '300px',
            'padding': 'var(--default-padding) 0px',
            'margin': 'var(--default-margin) 0px',
            'border': 'none',
            'outline': 'none',
            'background-color': 'transparent',
        },
        // attributes
        {},
        // methods
        {},
    )
    component.append(_textarea, _highlights) 

    return component
}
// end editor

/* -- End/Components -- */

/* -- Start/CoreObject -- */
const $ = {
    application,
    section,
    header,
    toolbar,
    main,
    footer,
    area,
    row,
    column,
    scroll,
    label,
    form,
    input,
    details,
    spacer,
    divider,
    link,
    button,
    list,
    listItem,
    text,
    textarea,
    menu,
    menuItem,
    editor,
}
/* -- End/CoreObject -- */

/* -- Start/Exports -- */
export { $ }
/* -- End/Exports -- */