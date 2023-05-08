import { TodoService } from "../services/http/todo";

export async function useTodoList() {
  return await TodoService.getTodoList()
}