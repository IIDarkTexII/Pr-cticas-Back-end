const { query } = require('express');
const Task = require('../models/task');

//Este es el controlador


class TaskList{
    /**
     * Manejar APIS y despliega y maneja los tasks
     * @param {Task} taskObjeto 
     */
    constructor(taskObjeto){
        this.taskObjeto = taskObjeto
    }


    async showTask(req, res) {
        const querySpec = {
            query: "SELECT * FROM root r WHERE r.completed=@completed",
            parameter:{
                name: "@completed",
                value: false
            }
        }

        const items = await this.taskObjeto.find(querySpec);

        res.render("index", {
            title: "Mi lista de pendientes",
            tasks: items
        });
    }


    async addTask(req,res){
        const item = req.body;

        await this.taskObjeto.addItem(item);
        res.redirect('/');
    }


    async completedTask(req,res){
        const completedTask = Object.keys(req.body);
        const tasks = [];

        completedTask.forEach(task =>{
            task.push(this.taskObjeto.updateItem(task));
        });

        await Promise.all(tasks);
        res.redirect("/")
    }
}

module.exports=TaskList;