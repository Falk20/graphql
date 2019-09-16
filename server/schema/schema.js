const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQueryType = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        book:{
            type: BookType,
            args: {id: {type: GraphQLString}}
        }
    }
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLString},
        books: {}
    })
});