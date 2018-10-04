const { ApolloServer } = require('apollo-server');

import mongoose from 'mongoose';

const schema = require('./schema');

const PORT = 3000;
const server = new ApolloServer({
    typeDefs: schema.typeDefs,
    resolvers: {},
    context: async () => ({
        mongo: await connectMongo(),
    })
});

function connectMongo() {
    mongoose.connect('mongodb://andrewp02v:27017/TripDox')
    var db = mongoose.connection;
    db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
    db.once('open', () => {
        console.log( '+++Connected to mongoose')
    });
}


server.listen({port:PORT}).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});