import mongoose from 'mongoose';
import Todo from '../models/todos.js';

export const readTodos = async(req,res) => {

    try{
        const todos = await Todo.find();
        res.status(200).json(todos)
    }catch (error) {
        res.status(404).json({error: error.message})
    }
}

export const createTodos = async(req,res) => {

    const todo = new Todo(req.body);

    try{
        await todo.save();
        res.status(200).json(todo)
    }catch (error) {
        res.status(404).json({error: error.message})
    }
}

export const deleteTodos = async (req,res) => {

    const {id} = req.params;

    try {
        await Todo.findByIdAndRemove(id);

        res.status(200).json({message: 'Todo deleted successfully'})

    }catch(error) {
        res.status(404).json({error: error.message})

    }

}

export const updateTodos = async (req,res) => {

    const {id} = req.params;
    const {title} = req.body;
    console.log(title)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`The id ${id} is not valid`)
    }

    const todo = {title,_id: id};
    await Todo.findByIdAndUpdate(id,todo,{new: true});
    res.json(todo);

}