const express = require('express');
const app = express();
const port = parseInt(process.env.port) || 4000;

let courses = [
    {
        id:1,
        name:'Coding',
    },
    {
        id:2,
        name:'Jiu-Jitsu',
    },
    {
        id:3,
        name:'Racing',
    },
    {
        id:4,
        name:'Java',
    },
    {
        id:5,
        name:'Water',
    }
];

app.listen(port,()=> {
    console.log('server is running at port ${port}')
})

app.get('/', (req,res)=> {
    const index = parseInt(req.params.id) - 1;
    if(index < courses.length) {
        res.send(courses[index]);
    }else {
        res.send('course was not found')
    }
});