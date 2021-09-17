import express from 'express';
import { readTodos,createTodos, deleteTodos, updateTodos } from './../controller/todo.js';


const router = express.Router();
router.get('/',readTodos);
router.post('/',createTodos);
router.delete('/:id',deleteTodos);
router.patch('/:id',updateTodos);

export default router;