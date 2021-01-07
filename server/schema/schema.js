const graphql = require("graphql")
const {GraphQLObjectType, GraphQLString} = graphql

const MovieType = new GraphQLObjectType({
    name:'Movie',
    fields:()=>({
        id:{type:GraphQLString},
        title:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        movie:{
            type:MovieType,
            args:{id:{type:GraphQLString}},
            resolve:(parent,args){
                //TODO get data from Database
            }

        
    }
    }
})