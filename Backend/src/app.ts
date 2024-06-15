import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from 'path';
import * as routes from "./routers/index.ts";
// import { appUserIdFromHeaders, convertQueryOperators } from "./middlewares/index.ts"


const app = express()



// Todo look into API Gateway middleware

// Todo how would you identify were endpoint is appended to
// localhost url


// use seperate build folders for frontend and backend builds

// There is a dependency across features something needs to be
// created within database sometimes in order to use a specific
// feature.



// Global Middlewares
app.use(morgan("tiny")) // HTTP request logger


app.use(cors())
app.use(express.json())

// if you don't need to parse complex URL-encoded data structures and want to
//  rely on the built-in querystring library for parsing.
app.use(express.urlencoded({ extended: false }))

// use popular querystring library which supports nested objects and arrays in
// the request body, allowing for richer data structures.
// app.use(express.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, "static", "about.html")))
// app.use(appUserIdFromHeaders)



// Can use middleware for things like cookies, caching, user validation, etc...
// Apply middlewares globally or on specific routes
// app.use("/v1/api", routes.tvShowRouter, middleware)
app.use("/v1/api", routes.tvShowRouter)

// app.use("/v1/api/example", routes.exampleRouter)




export default app
