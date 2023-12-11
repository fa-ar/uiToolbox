'use strict'

/* -- Start/Data -- */

// function to initialize main data store
const iniStore = () => {
    if (!localStorage.getItem('dataStore')) {
        localStorage.setItem('dataStore', JSON.stringify({
            stores: [],
        }))
    }

    else {
        console.log(`Main data store initialized.`)
    }
}

// function to get the main data store
const getDataStore = () => {
    return JSON.parse(localStorage.getItem('dataStore'))
}

// function to create a data store
const setStore = (storeName) => {
    const dataStore = getDataStore()
    if (dataStore.stores.some(store => store.name === storeName)) {
        throw new Error(`Store ${storeName} already exists.`)
    }

    localStorage.setItem('dataStore', JSON.stringify(dataStore))
}

// function to retrieve a store
const getStore = (storeName) => {
    const dataStore = getDataStore()
    return dataStore.stores.find(store => store.name === storeName)
}

// function to delete a store
const delStore = (storeName) => {
    const dataStore = getDataStore()
    dataStore.stores.filter(store => store.name !== storeName)
    localStorage.setItem('dataStore', JSON.stringify(dataStore))
}

// function to create a document
const setDocument = (storeName, documentName, content, tags = []) => {
    const dataStore = getDataStore()
    const store = dataStore.stores.find(store => store.name === storeName)

    if (!store) {
        throw new Error(`Store ${storeName} not found.`)
    }

    if (store.content.some(document => document.name === documentName)) {
        throw new Error(`Document ${documentName} already exists in ${storeName}.`)
    }

    store.content.push({
        _id: crypto.randomUUID(),
        creationDate: new Date().toLocaleString(),
        lastUpdate: new Date().toLocaleString(),
        name: documentName,
        content: content,
        tags: tags,
    })

    localStorage.setItem('dataStore', JSON.stringify(dataStore))
}

// function to get all documents
const getDocuments = (storeName) => {
    const store = getStore(storeName)
    
    if(!store) {
        throw new Error(`Store ${storeName} not found.`)
    } 

    return store.content
}

// function to retrieve a document
const getDocument = (storeName, documentName) => {
    const store = getStore(storeName)
    const document = store.content.find(document => document.name === documentName)

    if (!store) {
        throw new Error(`Store ${storeName} not found.`)
    }

    if (!document) {
        throw new Error(`Document ${documentName} not found.`)
    }

    return document
}

// function to retrieve documents by tags
const getDocumentsByTags = (tags) => {
    const dataStore = getDataStore()
    const matchingDocuments = []

    dataStore.stores.array.forEach(store => {
        store.forEach(document => {
            if (tags.every(tag => document.tags.includes(tag))) {
                matchingDocuments.push({
                    storeName: store.name,
                    documentName: document.name,
                })
            }
        })
    })
    
    return matchingDocuments
}

// function to modify a document
const modDocument = (storeName, documentName, newContent, newTags) => {
    const dataStore = getDataStore()
    const store = dataStore.stores.find(store => store.name === storeName)
    const document = dataStore.stores.find(document => document.name === documentName)

    if (!store) {
        throw new Error(`Store ${storeName} not found.`)
    }

    if (!document) {
        throw new Error(`Document ${documentName} not found.`)
    }

    document.content = newContent
    document.tags = newTags
    document.lastUpdate = new Date().toLocaleString(),
    localStorage.setItem('dataStore', JSON.stringify(dataStore))
}

// function to move a document
const mveDocument = (documentName, sourceStoreName, destinationStoreName) => {
    const dataStore = getDataStore()
    const sourceStore = dataStore.stores.find(store => store.name === sourceStoreName)
    const destinationStore = dataStore.stores.find(store => store.name === destinationStoreName)
    const documentToMove = sourceStore.content.find(documentName => document.name === documentName)

    if (!dataStore) {
        throw new Error(`Store ${dataStore} not found.`)
    }

    if (!sourceStore) {
        throw new Error(`Soutce store ${sourceStoreName} not found.`)
    }

    if (!destinationStore) {
        throw new Error(`Destination store ${destinationStore} not found`)
    }

    if (!documentName) {
        throw new Error(`Documnet ${documentName} not found.`)
    }

    // remove document from source store
    sourceStore.contet.filter(document => document.name !== documentName)

    // add document to destination store
    destinationStore.content.push(documentToMove)

    localStorage.setItem('dataStore', JSON.stringify(dataStore))
}

// function to delete a document
const delDocument = (documentName, storeName) => {
    const dataStore = getDataStore()
    const store = dataStore.stores.find(store => store.name === storeName)
    store.content = store.content.filter(document => document.name !== documentName)
    localStorage.setItem('dataStore', JSON.stringify(dataStore))
}

/* -- End/Data -- */

/* -- Start/Exports -- */
export {
    iniStore,
    getDataStore,
    setStore,
    delStore,
    setDocument,
    getDocument,
    mveDocument,
    modDocument,
    delDocument,
}
/* -- End/Exports -- */