import { useState } from "react";
import type {TaskProperties} from "../models/TaskProperties.ts"

const initValueTasks = [
    {
        id: 1,
        estado: "pendiente",
        nombre: "Hacer la tarea de baez",
        descripcion: "asdasdasd",
        fechaCreacion: new Date(),
    },
    {
        id: 2,
        estado: "pendiente",
        nombre: "HACER CAFE",
        descripcion: "holaaa",
        fechaCreacion: new Date(),
    },
    {
        id: 3,
        estado: "completada",
        nombre: "IR AL GYM",
        descripcion: "chauuu",
        fechaCreacion: new Date(),
    },
];

export function TaskHook(){
    const [tasksData, setTasksData] = useState<TaskProperties[]>(initValueTasks);
    
    const remove = (id: number) => {
    setTasksData((prev) => prev.filter((task) => task.id !== id));
    };
    
    const addTask = (newTask: TaskProperties) => {
        setTasksData((prev) => [...prev, newTask]);
    };
    console.log(tasksData)
    return {tasksData, remove, addTask};
}


