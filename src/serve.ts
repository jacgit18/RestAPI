
import { AddressInfo } from "net";
import app from "./app.ts";


const port = process.env.PORT || 3003;


const server = app.listen(Number(port), "0.0.0.0", () => {
  const address = server.address() as AddressInfo;

  if (address) {
    console.log(`Server is up & listening at http://localhost:3003...`)
  } else {
    console.error("Failed to retrieve server address.");
  }
});

