import cors from "cors";
import express from "express";
import morgan from "morgan";
import * as routes from "./routers/index.js";
// import { appUserIdFromHeaders, convertQueryOperators } from "./middlewares/index.ts"

// Todo look into API Gateway middleware

// Todo how would you identify were endpoint is appended to
// localhost url

// use seperate build folders for frontend and backend builds

// There is a dependency across features something needs to be
// created within database sometimes in order to use a specific
// feature.

const app = express()


// Global Middlewares
app.use(morgan("tiny")) // HTTP request logger


app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }))


// app.use(express.static(path.join(__dirname, "static", "about.html")))
// app.use(appUserIdFromHeaders)


app.use("/v1/api", routes.tvShowRouter)

// app.use("/v1/api/example", routes.exampleRouter)




export default app
