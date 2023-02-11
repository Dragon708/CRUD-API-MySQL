import { pool } from "../poolConfig.js";

 function tasks(req, res) {
    res.render('tasks/tasks');
}
function create(req, res) {
    res.render('tasks/create');
}
async function edit(req, res) {
    const id = req.params.id
    const datos = await pool.query('SELECT *  FROM Tareas WHERE id = ? ', [id])
    const info = datos[0]
    res.render('tasks/edit', {info });
}
export default {
    tasks,
    create,
    edit,
}

