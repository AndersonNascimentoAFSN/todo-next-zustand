import { Task } from "@/types/task";
import { TodoService } from "../services/http/todo";

type useCreateTodo = {
  todo: Task
}

export function useCreateTodo({ todo }: useCreateTodo) {
  return TodoService.createTodo({ todo })
}