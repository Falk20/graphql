const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://falkal:0gbf0x2r@cluster0-8b9vu.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, ()=>{
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(4000, ()=>{
    console.log("now listening for request on port 4000");
});