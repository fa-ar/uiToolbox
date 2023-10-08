'use strict'

/*
    function in charge of creating the main definition for a component
*/
const define = (tag, attributes, ...children) => {
    return {tag, attributes, children}
}


/*
    function in charge of creating the component based on a provided definition
*/
const create = (componentDefinition) => {
    const component = document.createElement(componentDefinition.tag)

    if (componentDefinition.attributes) {
        for (let attribute in componentDefinition.attributes) {
            component.setAttribute(attribute, componentDefinition.attributes[attribute])
        }
    }

    if (componentDefinition.events) {
        for (let event in componentDefinition.events) {
            if (typeof event === 'function') {
                component.addEventListener(event, componentDefinition.events[event])
            }
        }
    }

    if (componentDefinition.children) {
        componentDefinition.children.forEach((child) => {
            if (typeof child === 'string' || child instanceof String) {
                component.appendChild(document.createTextNode(child))
            }

            else if (typeof child === 'object') {
                component.appendChild(create(component))
            }
        })
    }

    return component
}


/*
    function in charge of extending created components
*/
const extend = (component, features) => {
    for (let feature in features) {
        component[feature] = features[feature]
    }

    return component
}



/*
    function in charge of rendering the created user interface
*/
const render = (parent,  child) => {
    return parent.appendChild(child)
}


export {
    define,
    create,
    extend,
    render,
}