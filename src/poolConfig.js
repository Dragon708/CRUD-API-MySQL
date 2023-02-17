
import { createPool } from 'mysql2/promise'

 
export const pool = createPool({
    host: "sql10.freemysqlhosting.net",
    user: "sql10599134",
    password: "Sg99Dk4lx5",
    port: 3306,
    database: "sql10599134"
})