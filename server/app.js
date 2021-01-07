const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./schema/schema")
const app = express()

//graphql in express is used as middleware
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(5000)