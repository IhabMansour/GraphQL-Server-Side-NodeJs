const express = require('express');
const {
    graphqlHTTP
} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://ihab:test123@graphql-react-app.exbh8.mongodb.net/graphql-react-app?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to DB');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('Now listening to port 4000')
})
