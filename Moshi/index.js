const config = require('config')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express');
const app = express();
const logger = require('./logger')
app.use(express.json());


// configuring the server
console.log('Application Name'+ config.get('name'));
console.log('Mail Server'+ config.get('email.host'));
// console.log(`NODE_ENV: ${process.env.NODE 

if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    console.log('Morgan is enabled ...')
}
const courses =[
    {id: 1, name: !"Course1"},
    {id: 2, name: !"Course2"},
    {id: 3, name: !"Course3"}
]
app.use(logger);
app.use(helmet() )
app.get('/', (req, res)=>{
    res.send('Hello I am Mr-Ndi')
});

app.get('/api/course', (req, res)=>{
    res.send([1,2,3])
});

app.get('/api/course/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(400).send("That course doesn't exist")
    res.send(course)
});

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Listerning on the port number ${port} ...`)
})