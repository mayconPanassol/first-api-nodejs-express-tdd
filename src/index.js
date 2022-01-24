const { response, request } = require('express')
const express = require('express')

const app = express()

app.get('/project', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.post('/project', (request, response) => {

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'

    ])

})

app.put('/project', (request, response) => {

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ])


})

app.delete ('/project', (request, response) => {

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 4'
    ])

})


app.listen(3333, () => {
    console.log('Backend started!')
})

