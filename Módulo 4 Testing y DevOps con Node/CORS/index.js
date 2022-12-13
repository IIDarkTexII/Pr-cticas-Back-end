//CORS = Solicitud de origen cruzada
const cors = require('cors');
const express = require('express');
const app = express();

const whiteList= ['https://www.section.io','https://www.google.com']

const corsOptions = {
    origin: (origin,callback)=>{
        if(whiteList.indexOf(origin)!==-1){
            callback(null,true)
        }else{
            callback(new Error());
        }
    }
}


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST','DELETE','UPDATE' ]
}));

const ingredientes = [
    {
        "id": "1",
        "item": "eggs",

    },
    {
        "id": "2",
        "item": "milk",
        
    },
    {
        "id": "3",
        "item": "hot-cakes",
        
    },
    {
        "id": "4",
        "item": "chilaquiles",
        
    }
];

app.get('/ingredientes',cors(),(req,res)=>{
    res.send(ingredientes)
});

app.listen(3004);