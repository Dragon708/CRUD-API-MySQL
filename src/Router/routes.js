import { Router } from 'express';
import { createData, deleteData, readData, updateData } from '../controller/controllers.js';



const routes = new Router();


routes.get('/tareas',async (req,res)=>{
    try {
        const respuesta = await readData()
        res.render('tasks/tasks', { respuesta })
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
} );
routes.post('/tareas', async (req,res)=>{
    const data = req.body
    try {
        const respuesta = await createData(data)
        res.status(200).json(`La Tarea Ha Sido Creada`)
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
});
routes.put('/tareas', async (req,res)=>{
    const data = req.body
    try {
        const respuesta = await updateData(data)
        res.status(200).json(`La Tarea Ha Sido Actualizada`)
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
});
routes.delete('/tareas', async (req,res)=>{
    const data = req.body
    try {
        const respuesta = await deleteData(data)
        res.status(200).json(`La Tarea Ha Sido Eliminada`)
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
});




export default routes;
