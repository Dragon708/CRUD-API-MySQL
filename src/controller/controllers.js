import {pool} from '../poolConfig.js'


export async function readData(){
    const resultado = await pool.query('SELECT * FROM Tareas')
    return resultado[0];
}
export async function createData(data){
    const {title,tareas} = data
    const resultado = await pool.query('INSERT INTO Tareas (title, tareas ) VALUE (?,?)',[ title, tareas ])
    return resultado;
}
export async function updateData(data ,id){
    const {title,tareas} = data
    const resultado = await pool.query('UPDATE Tareas SET tareas = ? , title = ?  WHERE id = ?',[ tareas ,title, id ])
    return resultado
}
export async function deleteData(data){
    const{id} = data
    await pool.query('DELETE FROM Tareas WHERE id = ?',[id])
}



