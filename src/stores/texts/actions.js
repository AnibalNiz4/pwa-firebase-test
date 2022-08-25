import { getTasksFirebase, addTaskFireba } from "src/services/textsService";
import { useTasksStore } from "./state";

export async function getTasks() {
  const responseGetTasks = await getTasksFirebase();

  if (responseGetTasks.status === 200) {
    useTasksStore().tasks = responseGetTasks.data;
  } else {
    console.log("error");
  }
}

export async function addTask(task) {
  const responseAddTasks = await addTaskFireba(task);

  if (responseAddTasks.status === 200) {
    // useTasksStore().tasks[responseAddTasks.id] = task;
    // console.log(responseAddTasks.id);
    console.log("hola");
  } else {
    console.log("error");
  }
}
