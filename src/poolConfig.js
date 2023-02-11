
import { createPool } from 'mysql2/promise'

 
export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Dragonslayer95",
    port: 3306,
    database: "Prueba"
})