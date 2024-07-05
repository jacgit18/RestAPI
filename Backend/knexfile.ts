// ensuring that env vars are set up
import config from "./src/config/config.ts"

const knexMigrationConfig = config.standardDbConfig

export default knexMigrationConfig
