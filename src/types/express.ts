import { Request } from "express"
// import { JwtUserInfo } from "../auth/jwtUtil.js"


// The & operator in TypeScript is used to create an intersection type. 
// An intersection type combines multiple types into one.
export type customRequest = Request & {
//   user: JwtUserInfo,
  // token: string,
  appuser_id: string,
}


// export type customRequest = express.Request