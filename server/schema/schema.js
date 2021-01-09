const graphql = require("graphql")
const _ = require("lodash")
const {GraphQLObjectType, GraphQLString,GraphQLSchema, GraphQLID,GraphQLInt} = graphql

let movies = [
    {title:"Arrambam",genre:"Action",id:"1",directorId:"1"},
    {title:"Valimai",genre:"Thriller",id:"2",directorId:"2"},
    {title:"Mass",genre:"Horror",id:"3",directorId:"3"},
]

let directors = [
    {name:"EshwarNE",age:21,id:"1"},
    {name:"Vinoth",age:40,id:"2"},
    {name:"James",age:22,id:"3"},
]

const MovieType = new GraphQLObjectType({
    name:'Movie',
    fields:()=>({
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        genre:{type:GraphQLString},
        director:{
            type:DirectorType,
            resolve(parent,args){
                return _.find(directors,{id:parent.directorId})
            }
        }
    })
})

const DirectorType = new GraphQLObjectType({
    name:"Director",
    fields:()=>({
        id:{type:GraphQLID},
        age:{type:GraphQLInt},
        name:{type:GraphQLString}
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
        
         },
         director:{
             type:DirectorType,
             args:{id:{type:GraphQLID}},
             resolve(parent,args){
                 return _.find(directors,{id:args.id})
             }
         }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})