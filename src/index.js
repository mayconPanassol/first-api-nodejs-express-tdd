const { response, request } = require('express')
const express = require('express')
const req = require('express/lib/request')

const app = express()

app.use(express.json())

app.get('/project', (request, response) => {
    const { title } = request.query;   
    
    console.log(title)

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.post('/project', (request, response) => {

    const body = request.body

    console.log(body)

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'

    ])

})

app.put('/project/:id', (request, response) => {

    const {id} = request.params

    console.log(id);

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

