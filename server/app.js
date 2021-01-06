const express = require("express")
const {graphqlHTTP} = require("express-graphql")

const app = express()

//graphql in express is used as middleware
app.use("/graphql",graphqlHTTP({

}))

app.listen(5000)