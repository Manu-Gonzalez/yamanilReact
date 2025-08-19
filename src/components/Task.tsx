import { Card } from "./Card";
import type {TaskProperties} from "../models/TaskProperties"



interface TaskProps {
  tasks: TaskProperties[];
  onRemoveTask: (id: number) => void;
//   onCompleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, onRemoveTask }: TaskProps) => {
  return (
    <Card>
      {(
        tasks.map((task) => (
          <div key={task.id} className="flex gap-4 bg-blue-500">
            <h1>{task.nombre}</h1>
            <span>{task.descripcion}</span>
            <button onClick={() => onRemoveTask(task.id)}>Eliminar</button>
          </div>
        ))
      )}
    </Card>
  );
};
