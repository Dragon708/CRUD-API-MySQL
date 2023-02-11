import TaskController from '../controller/taskController.js';

import { Router } from 'express';
import { createData, deleteData, readData, updateData } from '../controller/controllers.js';

const routesTasks = new Router();

routesTasks.get('/tasks', async (req,res)=>{
    try {
        const respuesta = await readData()
        res.render('tasks/tasks', { respuesta})
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
} );
routesTasks.get('/create',TaskController.create)
routesTasks.post('/create',async (req,res)=>{
    const data = req.body
    try {
        const respuesta = await createData(data)
        res.redirect('/tasks')
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
});
routesTasks.get('/update/:id' , TaskController.edit )
routesTasks.post('/update/:id', async (req,res)=>{
    const id = req.params.id
    const data = req.body
    try {
        const respuesta = await updateData(data, id)
        res.redirect('/tasks')
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
});
routesTasks.post('/delete', async (req,res)=>{
    const data = req.body
    try {
        const respuesta = await deleteData(data)
        res.redirect('/tasks')
        
    } catch (error) {
        return res.status(404).json({ message:error})
    }
});

export default routesTasks;