import { Task } from "@/types/task";
import { TodoService } from "../services/http/todo";

type useCreateTodo = {
  todo: Task
}

export async function useCreateTodo({ todo }: useCreateTodo) {
  return await TodoService.createTodo({ todo })
}