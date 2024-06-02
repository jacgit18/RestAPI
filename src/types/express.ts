import { Request } from "express"
// import { JwtUserInfo } from "../auth/jwtUtil.js"

export type customRequest = Request & {
//   user: JwtUserInfo,
//   token: string,
  appuser_id: string,
  // company_id: string,
}


// export type customRequest = express.Request