import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from 'path';
import * as routes from "./routers/index.ts";
// import { appUserIdFromHeaders, convertQueryOperators } from "./middlewares/index.ts"


const app = express()


// Middle Wares
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




app.use("/v1/api/shows", routes.exampleRouter)




export default app
