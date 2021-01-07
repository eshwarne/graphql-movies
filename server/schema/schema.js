const graphql = require("graphql")
const _ = require("lodash")
const {GraphQLObjectType, GraphQLString,GraphQLSchema, GraphQLID} = graphql

let movies = [
    {title:"Arrambam",genre:"Action",id:"1"},
    {title:"Valimai",genre:"Thriller",id:"2"},
    {title:"Mass",genre:"Horror",id:"3"},
]

const MovieType = new GraphQLObjectType({
    name:'Movie',
    fields:()=>({
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        movie:{
            type:MovieType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
              return  _.find(movies,{id:args.id})
            }
        
         }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})